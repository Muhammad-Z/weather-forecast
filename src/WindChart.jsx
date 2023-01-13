import React from 'react';
import { useForecast } from './ForecastContext.jsx';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartDataLabels
);

const options = {
  responsive: true,
  parsing: {
    xAxisKey: 'speed',
    yAxisKey: 'direction'
  },
  scales: {
    x: {
      grid: {
        display: false
      },
    },
    y: {
      grid: {
        display: false
      },
      stepValue: 1,
      /*   min: 80,
        max: 100, */
      display: false,
    }
  },
  plugins: {
    datalabels: {
      color: 'yellow',
      anchor: 'end',
      align: 'top',
      display: false,
      labels: {
        font: {
          weight: 'bold'
        },
        value: {
          display: true,
          color: 'black',
          formatter: (value, ctx) => { return value.speed * -1 },
        },
        pointLabel: {
          display: true,
          anchor: 'center',
          align: 'center',
          color: 'red',
          font: {
            family: 'weathericons'
          },
          formatter: function (value, ctx) {
            return value.direction
          }
        }
      }
    }
  }
};


/* switch (value.direction) {
  case 0: case 360: return '';
  case 90: return '';
  case 180: return '';
  case 270: return '';
  default: {
    if (value.direction < 90) return '';
    if (value.direction < 180) return '';
    if (value.direction < 270) return '';
    if (value.direction < 360) return '';
  }
} */

export default function WindChart() {
  const forecast = useForecast();


  return (forecast.forecast5Days && <Line options={options} data={{
    labels: forecast.forecast5Days[forecast.selectedDay].time,
    datasets: [
      {
        label: 'Dataset 1',
        data: forecast.forecast5Days[forecast.selectedDay].wind.map(
          elem => ({ speed: elem.speed, direction: elem.direction })),
        borderColor: 'blue',
        pointRadius: 10,
        pointHoverRadius: 10,
        pointBackgroundColor: 'white',
      },
    ],
  }} />);
}