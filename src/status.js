import { CONNECTION_STATE_CHANGE, ConnectionState } from '@aws-amplify/pubsub';
import { Hub } from 'aws-amplify';
import { useEffect,useState } from "react";



function Status(){

    const [statusValue, setStatusValue] = useState("Disconnected");
    useEffect(() => {

Hub.listen('api', (data) => {
  const { payload } = data;
  if (payload.event === CONNECTION_STATE_CHANGE) {
    const connectionState = payload.data.connectionState;
    setStatusValue(connectionState);
  }
});
    },[])


    return (
        <div>
              <p>{statusValue}</p>
        </div>
      );
}

export default Status;