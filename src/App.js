import { Component } from 'react';
import {Amplify,  API, graphqlOperation } from 'aws-amplify';
import { createGreengrassData, createNote, deleteGreengrassData, deleteNote } from './graphql/mutations';
import { onCreateGreengrassData } from './graphql/subscriptions';
import { listNotes } from './graphql/queries';
import React, { useState,useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleClick = () => {
    this.props.addNote(this.state);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div style={styles.form}>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="New Note"
          style={styles.input}
        />
        <button onClick={this.handleClick} style={styles.addButton}>Add Note</button>
      </div>
    );
  }
}

function NotesList(){
  
  const [sensorValue, setSensorValue] = useState("start subscription to sensor");


  //subscribe to changes in sensor values
  useEffect(() => {

    
      console.log('start subscription to sensor');

      const subscriber = API.graphql(graphqlOperation(onCreateGreengrassData)).subscribe({
        next: (response) => {

          //update the sensor's status in state
          if (response) {
            console.log(response.value.data);
            setSensorValue(response.value.data.onCreateGreengrassData.greengrass_data)
           var cpuUsage=Math.floor(JSON.parse(response.value.data.onCreateGreengrassData.greengrass_data)[0].V*100);
           console.log(cpuUsage);
          }
        },
        error: (error) => {
          console.log('error on sensor subscription', error);
        }
      }); 


  },[]);



    return (
      <div>
       
          <div style={styles.note}>
            <p>{sensorValue}</p>
           
          </div>
        
      </div>
    );
  
}

class App extends Component {


  
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }


  deleteNote = async (note) => {
    const id = {
      id: note.id
    };
    await API.graphql(graphqlOperation(deleteGreengrassData, { input: id }));
    this.setState({ notes: this.state.notes.filter(item => item.id !== note.id) });
  }

  addNote = async (note) => {
    var result = await API.graphql(graphqlOperation(createGreengrassData, { input: note }));
    this.state.notes.push(result.data.createNote);
    this.setState({ notes: this.state.notes });
  }





  render() {
    return (
      <div style={styles.container}>
        <h1>AWS Greengrass App</h1>
        <NotesList  />
      </div>
    );
  }
}

export default App;

const styles = {
  container: { width: 480, margin: '0 auto', padding: 20 },
  form: { display: 'flex', marginBottom: 15 },
  input: { flexGrow: 2, border: 'none', backgroundColor: '#ddd', padding: 12, fontSize: 18 },
  addButton: { backgroundColor: 'black', color: 'white', outline: 'none', padding: 12, fontSize: 18 },
  note: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, marginBottom: 15 },
  deleteButton: { fontSize: 18, fontWeight: 'bold' }
}