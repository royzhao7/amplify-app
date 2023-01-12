import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import moment from 'moment';
import {getRangeRandom, generateMinuteWiseTimeSeries} from './scripts'
  
var state = {
    series: [{
        name: 'Load Average',
        data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
          min: 10,
          max: 110
        })
      }],
    options: {
    chart: {
        height: 350,
        type: 'bar',
        foreColor: '#fff',
        animations: {
          enabled: false
        },
        events: {
          animationEnd: function (chartCtx, opts) {
            const newData = chartCtx.w.config.series[0].data.slice()
            newData.shift()
             setTimeout(function () {
              chartCtx.updateOptions({
                series: [{
                  data: newData
                }],
                xaxis: {
                  min: chartCtx.minX,
                  max: chartCtx.maxX
                },
                subtitle: {
                  text: parseInt(getRangeRandom({min: 1, max: 20})).toString() + '%',
                }
              }, false, false)
            }, 300)
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0,
      },

      title: {
        text: 'Load Average',
        align: 'left',
        style: {
          fontSize: '12px'
        }
      },
      subtitle: {
        text: '20%',
        floating: true,
        align: 'right',
        offsetY: 0,
        style: {
          fontSize: '22px'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#F55555', '#6078ea', '#6094ea'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100]
        }
      },
      xaxis: {
        type: 'datetime',
        range: 2700000,
        axisTicks: {
          color: '#333'
        },
        axisBorder: {
          color: "#333"
        }
      },
      yaxis: {
        decimalsInFloat: 2,
        opposite: true,
        labels: {
          offsetX: -10
        }
      },
      grid: {
        borderColor: "#40475D",
      },
      legend: {
        show: true
      },
      tooltip: {
        theme: 'dark',
        x: {
          formatter: function (val) {
            return moment(new Date(val)).format("HH:mm:ss")
          }
        }
      },
      colors: ['#FCCF31', '#17ead9', '#f02fc2']
    }
};



function ColumnChart() {
    const [chartdata,setchartdata]=useState(state.series);



    
  return (
      <ReactApexChart
        options={state.options}
        series={chartdata}
        type="bar"
        height={350}
      />
  );
}

export default ColumnChart;
