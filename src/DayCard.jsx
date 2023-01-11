import { useForecastDispatch } from './ForecastContext.jsx';

export default function DayCard({ day, icon, temp }) {
  const dispatch = useForecastDispatch();

  function handleClick() {
    dispatch({type: 'selectDay', payload: day});
  }

  return (
    <div className="day-card" onClick={handleClick} >
      <span>{day}</span>
      <img src={icon} />
      <i className="wi wi-night-sleet"></i>
      <span>{temp}</span>
    </div>
  )
}
