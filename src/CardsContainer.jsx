import DayCard from "./DayCard";
import { useForecast } from './ForecastContext.jsx';
import { useForecastDispatch } from './ForecastContext.jsx';
/* import { getForecast12Hours, getForecast5days } from './api/callAPI';
 */
import { getForecast12Hours, getForecast5days } from './api-owm/callAPI';
import { useEffect } from "react";


export default function CardsContainer() {
  const forecast = useForecast();
  const dispatch = useForecastDispatch();
  useEffect(() => {
    dispatch({ type: 'loadForecast5Days', payload: getForecast5days() });
    /* console.log(getForecast12Hours()) */
  }
    , [])

  console.log('forecast now is ', forecast);

  return (<>
    { forecast?.forecast5Days ?  forecast.forecast5Days.map(elem => <DayCard key={elem.date} day={elem.date} temp={elem.temp_avg} /> )  
    :null}
  </>
  )
}