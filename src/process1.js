
import { useState } from "react";
import ReactApexChart from "react-apexcharts";


var state = {
    series: [{
        name: 'Process 1',
        data: [44]
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
      text: 'Process 1'
    },
    subtitle: {
      floating: true,
      align: 'right',
      offsetY: 0,
      text: '44%',
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



    
  return (
      <ReactApexChart
        options={state.options}
        series={chartdata}
        type="bar"
        height={70}
      />
  );
}

export default Process1;