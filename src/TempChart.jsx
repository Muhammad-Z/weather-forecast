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
import chartGlobalOptions from './chartGlobalOptions.jsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartDataLabels
);


export function TempChart({selectedDay}) {
  const forecast = useForecast();
  const globeOptions = chartGlobalOptions(forecast.fiveDays[selectedDay].temp);

  var style = getComputedStyle(document.getElementById('root'));
  var labelColor = (style.getPropertyValue('--main-font-color'));

  return (<div className="box">
    <h2>Temperature (Celsius)</h2>
    <Line options={{
      ...globeOptions,
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'top',
          labels: {
            formatter: Math.round,
            font: {
              weight: 'bold'
            },
            value: {
              color: labelColor,
            }
          }
        }
      }
    }} data={{
      labels: forecast.fiveDays[selectedDay].time,
      datasets: [
        {
          label: 'Dataset 1',
          data: forecast.fiveDays[selectedDay].temp.list,
          tension: 0.5
        },
      ],
    }} /></div>);
}