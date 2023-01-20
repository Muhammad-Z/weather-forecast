import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useForecast } from './ForecastContext';
import chartGlobalOptions from './chartGlobalOptions';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);


export default function RainChart() {
  const forecast = useForecast();
  const globeOptions = chartGlobalOptions(forecast.fiveDays[forecast.selectedDay].rain);


  return (<div className="box">
    <h2>Rain</h2> <Bar options={{ ...globeOptions }} data={{
      labels: forecast.fiveDays[forecast.selectedDay].time,
      datasets: [
        {
          label: 'Dataset 1',
          data: forecast.fiveDays[forecast.selectedDay].rain.list,
          backgroundColor: '#4491FF',
        },
      ],
    }} /></div>);
}