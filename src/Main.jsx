import CardsContainer from "./CardsContainer";
import { HumadityChart } from "./HumadityChart";
import RainChart from "./RainChart";
import WindChart from "./WindChart";
import { useForecast, useForecastDispatch } from './ForecastContext';
import { useEffect } from "react";
import { getfiveDays } from "./api-owm/callAPI";


export default function Main() {
  const forecast = useForecast();
  const dispatch = useForecastDispatch();

  useEffect(() => {
    if (forecast?.location && !forecast.fiveDays) {
      dispatch({ type: 'loadfiveDays', payload: getfiveDays() });
    }
  }, [forecast])

  return (
    <main>
      {forecast?.fiveDays ? <>
        <CardsContainer />
        <WindChart />
        <HumadityChart />
        <RainChart />
      </>
        : null}


    </main>
  )

}