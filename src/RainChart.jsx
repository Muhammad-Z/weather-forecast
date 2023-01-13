import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useForecast } from './ForecastContext';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

export const options = {
  responsive: true,
  plugins: {

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
    }}
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [50,60,20,70,30,20,10],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function RainChart() {
  const forecast = useForecast();
  
  return (forecast.forecast5Days && <Bar options={options} data={{
    labels:forecast.forecast5Days[forecast.selectedDay].time,
    datasets: [
      {
        label: 'Dataset 1',
        data: forecast.forecast5Days[forecast.selectedDay].rain,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }} />);
}