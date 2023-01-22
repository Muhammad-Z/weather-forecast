import CityEntry from "./CityEntry";
import { useForecastDispatch } from "./ForecastContext";

export default function SearchList({ cityList }) {
  const dispatch = useForecastDispatch();

  function handleCityClick(e) {
    console.log(e.target)
  
    dispatch({
      type: 'loadLocation', payload: {
        name: e.target.dataset.name,
        country: e.target.dataset.country, 
        lat: e.target.dataset.lat,
        lon: e.target.dataset.lon, 
       
      }
    })
    document.getElementById('cityList').style.display = "none";
  }

  return (<>
    <div className="relative">
      <ul id="cityList" className="search-container" onClick={handleCityClick} > {/* map something to get the list */}
        {cityList.map((city, index) => (<CityEntry key={city.loc + index} /* name={city.name}
          country={city.country.name} */
          loc={city.loc}
          name={city.name} country={city.country.name} />))}
      </ul>
    </div>
  </>
  )
}