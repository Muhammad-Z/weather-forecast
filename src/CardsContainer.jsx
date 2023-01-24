import DayCard from "./DayCard";
import { useForecast } from './ForecastContext.jsx';

export default function CardsContainer({setSelectedDay}) {
  const forecast = useForecast();
  console.log('da forecasat is ', forecast.fiveDays)

  return (<div className="cards-container">
    {Array.isArray(forecast?.fiveDays) ? forecast.fiveDays.map((elem, index) =>
      <DayCard key={elem.date} day={elem.epoch}
        icon={{d: elem.weather.d.icon, n:elem.weather.n.icon}} temp={elem.temp_avg} index={index} setSelectedDay={setSelectedDay} />)  : null }
  </div>
  )
}