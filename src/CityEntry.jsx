import React from 'react';
import { useForecast } from "./ForecastContext";

export default function CityEntry() {
  const forecast = useForecast();

  return(
    <>
    <div>
      <ul className="search-container">
        <li>Result 1</li>
        <li>Result 2</li>
        <li>Result 3</li>
        <li>Result 4</li>
       
      </ul>
    </div>
    </>
  )
}