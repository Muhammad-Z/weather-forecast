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
      labels: {
        formatter: Math.round,
        font: {
          weight: 'bold'
        },
        value: {
          color: 'black',
        }
      }
    }
  }
};

export function HumadityChart() {
  const forecast = useForecast();

  return (forecast.forecast5Days && <Line options={options} data={{
    labels: forecast.forecast5Days[forecast.selectedDay].time,
    datasets: [
      {
        label: 'Dataset 1',
        data: forecast.forecast5Days[forecast.selectedDay].humidity,
        borderColor: 'blue',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.5
      },
    ],
  }} />);
}