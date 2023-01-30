import CardsContainer from "./CardsContainer";
import { HumadityChart } from "./HumadityChart";
import RainChart from "./RainChart";
import WindChart from "./WindChart";
import { useForecast, useForecastDispatch } from './ForecastContext';
import { useEffect } from "react";
import { getfiveDays } from "./api-owm/callAPI";
import { useState } from "react";
import { TempChart } from "./TempChart";


export default function Main() {
  const forecast = useForecast();
  const dispatch = useForecastDispatch();
  const [selectedDay, setSelectedDay] = useState(1);



  useEffect(() => {
    if (forecast?.location && !Array.isArray(forecast.fiveDays)) {
      console.log('forecast.fd', forecast?.fiveDays)
      
      getfiveDays(forecast.location).then(res => {
        dispatch({ type: 'loadfiveDays', payload: res })
      })
    }
  }, [forecast])

  return (
    <main>
      {forecast?.fiveDays ? <>
        <CardsContainer setSelectedDay={setSelectedDay}/>
        <TempChart selectedDay={selectedDay} />
        <WindChart selectedDay={selectedDay} />
        <HumadityChart selectedDay={selectedDay} />
        <RainChart selectedDay={selectedDay} />
      </>
        : null}


    </main>
  )

}