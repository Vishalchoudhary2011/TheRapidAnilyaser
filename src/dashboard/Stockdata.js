import React from 'react'
import Chart from "react-apexcharts";

export default function Stockdata() {
  const series = [ //data on the x-axis
    {
        name: 'NIFTY 50',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
      }
]
const options = { 
    chart: {
        height: 350,
        type: 'line',
      },
      title: {
        text: 'Most Active',
        align: 'left'
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type:'solid',
        opacity: [0.35, 1],
      },
      labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
      markers: {
        size: 0
      },
      yaxis: [
        {
          title: {
            text: 'Stocks',
          },
        },
       
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if(typeof y !== "undefined") {
              return  y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    
};
    
 
  return (
    <div>
     <Chart
        options={options}
        series={series}
        type="line" className="chartdata1"
         height="330"
      />
    </div>
  )
}
