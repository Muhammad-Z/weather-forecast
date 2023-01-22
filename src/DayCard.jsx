import { useEffect, useState } from 'react';
import { useForecastDispatch } from './ForecastContext.jsx';

export default function DayCard({ day, icon, temp, index }) {
  const dispatch = useForecastDispatch();
  
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (animate) { setAnimate(false); }
      else { setAnimate(true); }
    }, 3000)
    return () => clearTimeout(timer)
  }, [animate])

  function handleClick() {
    dispatch({ type: 'selectDay', payload: index });
  }

  return (<>
    <div className="day-card box" onClick={handleClick} >
      <span>{day}</span>
      <img className={`${animate ? 'animate' : 'hidden'}`}
        src={`https://openweathermap.org/img/wn/${icon.d}.png`} />
      <img className={`${animate ? 'hidden' : 'animate'}`}
        src={`https://openweathermap.org/img/wn/${icon.n}.png`} />
      <span>{temp}</span>
    </div>
  </>
  )
}
