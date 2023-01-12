
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

var state = {
    series: [{
        name: 'Process 3',
        data: [74]
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
          colors: ['#f02fc2'],
          stroke: {
            width: 0,
          },

          fill: {
            type: 'gradient',
            gradient: {
              gradientToColors: ['#6094ea']
            }
          },
          title: {
            floating: true,
            offsetX: -10,
            offsetY: 5,
            text: 'Process 3'
          },
          subtitle: {
            floating: true,
            align: 'right',
            offsetY: 0,
            text: '74%',
            style: {
              fontSize: '20px'
            }
          },
          tooltip: {
            enabled: false
          },
          xaxis: {
            categories: ['Process 3'],
            axisTicks: {
              color: '#333'
            },
            axisBorder: {
              color: "#333"
            }
          },
          yaxis: {
            max: 100
          }
    }
};

function Process3() {
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

export default Process3;