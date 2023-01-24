import { useEffect, useState } from 'react';
import { getCities } from './api-owm/callAPI';
import { useForecast, useForecastDispatch } from "./ForecastContext";
import SearchList from './SearchList';
import darkIcon from './dark-icon.png';
import lightIcon from './light-icon.png';


export default function Header({ setTheme }) {
  const dispatch = useForecastDispatch();
  const forecast = useForecast();

  let delayTimer;
  const [cityQuery, setCityQuery] = useState('');
  const [cityList, setCityList] = useState(false);
  const [listRenderKey, setListRenderKey] = useState(Date('now'));
  /* const [themeIcon, setThemeIcon] = useState('lightIcon');
 */
  useEffect(() => {
    if (!forecast.location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(loadPosition);
    }


    function loadPosition(position) {
      console.log('pos , ', position)

      dispatch({
        type: 'loadLocation', payload: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }
      })
    }


    if (cityQuery) {
      delayTimer = setTimeout(() => {
        getCities(({ cityQuery: cityQuery })).then(res => setCityList(res));
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
        document.getElementById("themeImg").classList.remove('light-theme');
        document.getElementById("themeImg").classList.add('dark-theme');
      } else if (item === "dark-theme") {
        root.classList.remove(item);
        root.classList.add("light-theme")
        setTheme('light-theme');
        document.getElementById("themeImg").classList.remove('dark-theme');
        document.getElementById("themeImg").classList.add('light-theme');
      }
    })

  }


  return (<header>
    <div className="row">
      <i className="wi wi-day-cloudy"></i>
      <div className="title-container">
        <h1>Weather Forecast</h1>
        <div className="theme-container"><label>theme
          <img id="themeImg" src={
            document.getElementById("root").classList.contains('light-theme') ?
              darkIcon : lightIcon
          } onClick={handleThemeClick}></img>
        </label>

        </div>
      </div>
    </div>
    {/* <button onClick={handleThemeClick}>Theme</button> */}


    <div className="row">
      {forecast?.location && <><span className="location">{forecast.location.name}, {forecast.location.country}</span>
        <span className="date"></span></>}
    </div>

    <div className="search-place">
      <input onInput={handleInput} onFocus={handleFocus}
        placeholder='Enter a city name' />
      {cityList && <SearchList key={listRenderKey} cityList={cityList} />}

    </div>
  </header>)
}