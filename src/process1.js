
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {Amplify,  API, graphqlOperation } from 'aws-amplify';
import { onCreateGreengrassData } from './graphql/subscriptions';
import awsExports from './aws-exports';


Amplify.configure(awsExports);


var state = {
    series: [{
        name: 'Process 1',
        data: [0]
      }],
    options:{
          chart: {
      height: 70,
      type: 'bar',
      stacked: true,
      sparkline: {
        enabled: true
      },
      foreColor: '#fff',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '20%',
        colors: {
          backgroundBarColors: ['#40475D']
        }
      },
    },
    stroke: {
      width: 0,
    },

    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: 'Memory_BetaVM'
    },
    subtitle: {
      floating: true,
      align: 'right',
      offsetY: 0,
      text: '0%',
      style: {
        fontSize: '20px'
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ['Process 1'],
      axisTicks: {
        color: '#333'
      },
      axisBorder: {
        color: "#333"
      }
    },
    yaxis: {
      max: 100
    },
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
      gradientToColors: ['#F55555', '#6078ea', '#6094ea']
      }
    },
    colors: ['#FCCF31', '#17ead9', '#f02fc2']
  }
}

function Process1() {
    const [chartdata,setchartdata]=useState(state.series);

    const [chartsoptions,setchartoptions]=useState(state.options);




    console.log('start subscription memory to sensor');

    const subscriber = API.graphql(graphqlOperation(onCreateGreengrassData)).subscribe({
      next: (response) => {

        //update the sensor's status in state
        if (response) {
          console.log(response.value.data);
        //  setSensorValue(response.value.data.onCreateGreengrassData.greengrass_data)
         var memoryCount=Math.round(JSON.parse(response.value.data.onCreateGreengrassData.greengrass_data)[2].V);
        
         const randomCpuLoad2 = Math.floor(Math.random() * 100)+1;

         const memoryUsage=Math.floor((memoryCount/3901)* 100)

         console.log("memoryUsage: "+memoryUsage);
        
       


// console.log("options: "+state.options.subtitle.text);

         setchartdata([{
          name: 'Process 1',
          data: [memoryUsage]
        }]);

        const memorySubtitleText=memoryUsage+'%';
        setchartoptions((prev) => ({
          ...prev,
          subtitle: {
            floating: true,
      align: 'right',
      offsetY: 0,
      text: memorySubtitleText,
      style: {
        fontSize: '20px'
      }
          },
        }));
        }
      },
      error: (error) => {
        console.log('error on sensor subscription', error);
      }
    }); 


    
  return (
      <ReactApexChart
        options={chartsoptions}
        series={chartdata}
        type="bar"
        height={70}
      />
  );
}

export default Process1;