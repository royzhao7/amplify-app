
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

var state = {
    series: [{
        name: 'Process 2',
        data: [80]
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
          colors: ['#17ead9'],
          stroke: {
            width: 0,
          },

          title: {
            floating: true,
            offsetX: -10,
            offsetY: 5,
            text: 'Process 2'
          },
          subtitle: {
            floating: true,
            align: 'right',
            offsetY: 0,
            text: '80%',
            style: {
              fontSize: '20px'
            }
          },
          tooltip: {
            enabled: false
          },
          xaxis: {
            categories: ['Process 2'],
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
            type: 'gradient',
            gradient: {
              inverseColors: false,
              gradientToColors: ['#6078ea']
            }
          }

    }
};

function Process2() {
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

export default Process2;