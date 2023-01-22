import DayCard from "./DayCard";
import { useForecast } from './ForecastContext.jsx';

export default function CardsContainer() {
  const forecast = useForecast();
  console.log('da forecasat is ', forecast.fiveDays)

  return (<div className="cards-container">
    {Array.isArray(forecast?.fiveDays) ? forecast.fiveDays.map((elem, index) =>
      <DayCard key={elem.date} day={elem.epoch}
        icon={elem.weather.d.icon} temp={elem.temp_avg} index={index} />)  : null }
  </div>
  )
}