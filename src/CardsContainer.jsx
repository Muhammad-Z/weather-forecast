import DayCard from "./DayCard";
import { useForecast } from './ForecastContext.jsx';

export default function CardsContainer() {
  const forecast = useForecast();

  return (<div className="cards-container">
    {forecast.fiveDays.map((elem, index) =>
      <DayCard key={elem.date} day={elem.epoch}
        temp={elem.temp_avg} index={index} />)}
  </div>
  )
}