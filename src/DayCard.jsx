import { useForecastDispatch } from './ForecastContext.jsx';

export default function DayCard({ day, icon, temp, index }) {
  const dispatch = useForecastDispatch();

  function handleClick() {
    dispatch({type: 'selectDay', payload: index});
  }

  return (
    <div className="day-card box" onClick={handleClick} >
      <span>{day}</span>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
      <span>{temp}</span>
    </div>
  )
}
