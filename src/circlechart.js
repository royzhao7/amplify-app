import { useState } from "react";
import ReactApexChart from "react-apexcharts";

var state = {
    series: [71, 63],
    options:{
    chart: {
      type: 'radialBar',
      height: 320,
      offsetY: -30,
      offsetX: 20,
      foreColor: '#fff',
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: '48%',
          background: 'transparent',
        },
        track: {
          show: true,
          background: '#40475D',
          strokeWidth: '10%',
          opacity: 1,
          margin: 3, // margin is in pixels
        },
  
  
      },
    },

    labels: ['CPU M', 'CPU A'],
    legend: {
      show: true,
      position: 'left',
      offsetX: -30,
      offsetY: 10,
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#F55555', '#6078ea', '#6094ea'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    colors: ['#FCCF31', '#17ead9', '#f02fc2']
  }
}


function CircleChart() {
    const [chartdata,setchartdata]=useState(state.series);



    
  return (
      <ReactApexChart
        options={state.options}
        series={chartdata}
        type="radialBar"
        height={320}
      />
  );
}

export default CircleChart;