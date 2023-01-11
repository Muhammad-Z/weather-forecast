
import { useEffect, useState } from 'react';
import CityEntry from './CityEntry.jsx';
import { getCities } from './api-owm/callAPI';
import { useForecastDispatch } from "./ForecastContext";


export default function Header({ setRenderKey }) {
  const dispatch = useForecastDispatch();

  let delayTimer;
  const [cityQuery, setCityQuery] = useState('');
  const [searchList, setSearchList] = useState(false);

  useEffect(() => {
    if (cityQuery) {
      delayTimer = setTimeout(() => {
        console.log('sup sup')
        /*  getCities({ cityQuery: cityQuery }).then(data => dispatch({
           type: 'loadLocation',
           payload: data
         })); */
        console.log('query is ', cityQuery)
        //save location lan,lat in state
      }, 1000);
    } // Will work after 1000 ms, or 1 s
    return () => clearTimeout(delayTimer);
  }, [cityQuery])


  function handleInput(e) {
    if (e.target.value) setCityQuery(e.target.value);

    /*  setCityQuery(e.target.value); */
    // Will work after 1000 ms, or 1 s
  }

  function handleFocus(e) {
    e.target.value = "";
  }

  function handleBlur(e) {
    setSearchList(false);
  }

  return (<header>
    <div className="row">
      <i className="wi wi-day-cloudy"></i>
      <h1>Weather Forecast</h1>
    </div>

    <div className="row">
      <span className="location"></span>
      <span className="date"></span>
    </div>

    <div className="search-place">
      <input onInput={handleInput} onFocus={handleFocus}
        onBlur={handleBlur} placeholder={cityQuery} />
      {searchList && <CityEntry />}
    </div>
  </header>)
}