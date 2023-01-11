import React, { useState } from 'react';
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
          color: 'red',
        }
      }
    }
  }
};

export function HumadityChart() {
  const forecast = useForecast();
  const [chartInfo, setChartInfo] = useState(false);

  const chartLabels = [];
  const chartData = [];

  if (forecast?.forecast5Days) {
    forecast.forecast5Days[0].list.map((elem, index) => {
      chartLabels[index] = `${elem.hour}:${elem.minute}`
      chartData[index] = elem.humidity
    });
    if (!chartInfo)
      setChartInfo({ chartLabels: chartLabels, chartData: chartData });
  }

  const data = {
    labels: chartInfo.chartLabels,
    datasets: [
      {
        label: 'Dataset 1',
        data: chartInfo.chartData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.3
      },
    ],
  };


  return (chartInfo && <Line options={options} data={data} />);
}