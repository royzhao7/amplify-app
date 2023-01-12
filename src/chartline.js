import { getRandom, generateMinuteWiseTimeSeries } from "./scripts";
import moment from "moment";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

var state = {
  series: [
    {
      name: "Running",
      data: generateMinuteWiseTimeSeries(
        new Date("12/12/2016 00:20:00").getTime(),
        12,
        {
          min: 30,
          max: 110,
        }
      ),
    },
    {
      name: "Waiting",
      data: generateMinuteWiseTimeSeries(
        new Date("12/12/2016 00:20:00").getTime(),
        12,
        {
          min: 30,
          max: 110,
        }
      ),
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      stacked: true,
      foreColor: "#fff",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
      events: {
        animationEnd: function (chartCtx, opts) {
          const newData1 = chartCtx.w.config.series[0].data.slice();
          newData1.shift();
          const newData2 = chartCtx.w.config.series[1].data.slice();
          newData2.shift();

          // check animation end event for just 1 series to avoid multiple updates
          if (opts.el.node.getAttribute("index") === "0") {
            window.setTimeout(function () {
              chartCtx.updateOptions(
                {
                  series: [
                    {
                      data: newData1,
                    },
                    {
                      data: newData2,
                    },
                  ],
                  subtitle: {
                    text: parseInt(getRandom() * Math.random()).toString(),
                  },
                },
                false,
                false
              );
            }, 300);
          }
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 5,
    },
    grid: {
      borderColor: "#40475D",
      padding: {
        left: 0,
        right: 0,
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 0,
      },
    },

    xaxis: {
      type: "datetime",
      range: 2700000,
      axisTicks: {
        color: "#333",
      },
      axisBorder: {
        color: "#333",
      },
    },
    yaxis: {
      decimalsInFloat: 2,
      opposite: true,
      labels: {
        offsetX: -10,
      },
    },
    title: {
      text: "Processes",
      align: "left",
      style: {
        fontSize: "12px",
      },
    },
    subtitle: {
      text: "20",
      floating: true,
      align: "right",
      offsetY: 0,
      style: {
        fontSize: "22px",
      },
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -28,
      offsetX: 60,
    },
    tooltip: {
      theme: "dark",
      x: {
        formatter: function (val) {
          return moment(new Date(val)).format("HH:mm:ss");
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#F55555", "#6078ea", "#6094ea"],
      },
    },
    colors: ["#FCCF31", "#17ead9", "#f02fc2"],
  },
};

function LineChart() {
  const [chartdata, setchartdata] = useState(state.series);

  return (
    <ReactApexChart
      options={state.options}
      series={chartdata}
      type="line"
      height={350}
    />
  );
}

export default LineChart;
