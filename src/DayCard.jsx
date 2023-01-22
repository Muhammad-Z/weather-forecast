import { useEffect, useState } from 'react';
import { useForecastDispatch } from './ForecastContext.jsx';

export default function DayCard({ day, icon, temp, index }) {
  const dispatch = useForecastDispatch();
  const [animate, setAnimate] = useState('');
  const [showup, setShowup] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (animate) { setShowup(false); setAnimate(''); }
      else { setShowup(true); setAnimate('animate'); }
    }, 5000)
  }, [animate])

  function handleClick() {
    dispatch({ type: 'selectDay', payload: index });
  }

  return (<>
    <div className="day-card box" onClick={handleClick} >
      <span>{day}</span>
      <img className={`${showup ? 'animate' : 'hidden'}`}
        src={`https://openweathermap.org/img/wn/${icon.d}.png`} />
      <img className={`${showup ? 'hidden' : 'animate'}`}
        src={`https://openweathermap.org/img/wn/${icon.n}.png`} />
      <span>{temp}</span>
    </div>
  </>
  )
}
