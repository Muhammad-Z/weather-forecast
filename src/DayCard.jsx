import { useEffect, useState } from 'react';
import { useForecastDispatch } from './ForecastContext.jsx';

export default function DayCard({ day, icon, temp, index, setSelectedDay }) {
/*   const dispatch = useForecastDispatch(); */
  
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (animate) { setAnimate(false); }
      else { setAnimate(true); }
    }, 3000)
    return () => clearTimeout(timer)
  }, [animate])

  function handleClick() {
   setSelectedDay(index);
  }

  return (<>
    <div className={`day-card box ${animate ? '' : 'dang'}`} tabIndex="-1" onClick={handleClick} >
      <span>{day}</span>
      <img className={`${animate ? 'animate' : 'hidden'}`}
        src={`https://openweathermap.org/img/wn/${icon.d}.png`} loading="lazy" />
      <img className={`${animate ? 'hidden' : 'animate'}`}
        src={`https://openweathermap.org/img/wn/${icon.n}.png`} loading="lazy" />
      <span>{temp}</span>
    </div>
  </>
  )
}
