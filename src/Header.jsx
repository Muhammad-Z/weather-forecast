import { useEffect, useState } from 'react';
import { getCities } from './api-owm/callAPI';
import { useForecast, useForecastDispatch } from "./ForecastContext";
import SearchList from './SearchList';


export default function Header({setTheme}) {
  const dispatch = useForecastDispatch();
  const forecast = useForecast();

  let delayTimer;
  const [cityQuery, setCityQuery] = useState('');
  const [cityList, setCityList] = useState(false);
  const [listRenderKey, setListRenderKey] = useState(Date('now'));

  useEffect(() => {
    if (!forecast.location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(loadPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }


    function loadPosition(position) {
      console.log('pos , ', position)
      dispatch({
        type: 'loadLocation', payload: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      })
    }


    if (cityQuery) {
      delayTimer = setTimeout(() => {
        setCityList(getCities(({ cityQuery: cityQuery })))
        setListRenderKey(Date('now'))

        //save location lan,lat in state
      }, 1000);

    } // Will work after 1000 ms, or 1 s
    return () => clearTimeout(delayTimer);
  }, [cityQuery])


  function handleInput(e) {
    if (e.target.value) setCityQuery(e.target.value);
  }

  function handleFocus(e) {
    e.target.value = "";
  }

  function handleThemeClick(e) {
    let root = document.getElementById("root");
    root.classList.forEach(item => {
      if (item === "light-theme") {
        root.classList.remove(item);
        root.classList.add("dark-theme")
        setTheme('dark-theme');
      } else if (item === "dark-theme") {
        root.classList.remove(item);
        root.classList.add("light-theme")
        setTheme('light-theme');
      }
    })
 
  }


  return (<header>
    <div className="row">
      <i className="wi wi-day-cloudy"></i>
      <h1>Weather Forecast</h1>
    </div>
    <button onClick={handleThemeClick}>Theme</button>

    <div className="row">
      {forecast?.location && <><span className="location">{forecast.location.name}, {forecast.location.country}</span>
        <span className="date"></span></>}
    </div>

    <div className="search-place">
      <input onInput={handleInput} onFocus={handleFocus}
        placeholder={cityQuery} />
      {cityList && <SearchList key={listRenderKey} cityList={cityList} />}

    </div>
  </header>)
}