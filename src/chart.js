import { useState } from "react";
import ReactApexChart from "react-apexcharts";

var state = {
  series: [44, 55, 67, 83],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  },
};



function ApexChart() {
    const [chartdata,setchartdata]=useState(state);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartdata.options}
        series={chartdata.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
}

export default ApexChart;
