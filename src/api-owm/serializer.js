//function serilizesomething
//function serilizeanotherthing
//lol lol lol

/* 
for each city in city search response (array of objects) I need:
key
EnglishName
LocalizedName
country.LocalizedName
country.EnglishName */

export function serializeCities(res) {
  console.log(res);
  return (
    res.data.map(elem => ({
      /*  key: elem.key, */
      loc: {
        lat: elem.lat,
        lon: elem.lon,
      },
      name: elem.name,
      /* localizedName: elem.LocalizedName, */
      country: {
        name: elem.country,
        /*  localizedName: elem.country.LocalizedName, */
      }
    }))
  )
}


/* for fiveDays forecast response (object) I need:
DailyForecast (array of 5 objects)
  Date
  Temperature.Minimum {Value, Unit}
  same for Maximum
  Day {Icon, IconPhrase, PrecipitationType, PrecipitationIntensity}
  Same for Night

  Sources
  Link
*/


/* make animation to move periodically and show day/night info */


/* each day is an object: {date, temp, humidity, rain} 
each attribute (except the date) is an array each index represent a 3 hours */

export function serializefiveDays(data) {
  console.log('tho the data is ', data)
  const arr = [];
  data.data.list.map(elem => {
    const unixTime = new Date(0);

    const dayDate = elem.dt_txt.split(" ")[0];
    const lastArrIndex = arr.length - 1;
    unixTime.setUTCSeconds(elem.dt);

    let day = unixTime.toLocaleDateString("en-us", { weekday: 'long' });

    if (arr[lastArrIndex]?.date !== dayDate) { //create new entry
      arr.push({ date: dayDate, epoch: day, temp_avg: 0, time: [], weather: {d: {icon: '0'}, n: {icon: '0'}}, temp: { max: -Infinity, min: +Infinity, list: [] }, rain: { max: -Infinity, min: +Infinity, list: [] }, humidity: { max: -Infinity, min: +Infinity, list: [] }, wind: { max: -Infinity, min: +Infinity, list: [] }, list: [] })
      return;
    }

    //else append to it

    let rain = elem?.rain ? elem.rain["3h"] : 0;
    const curListLeng = arr[lastArrIndex].list.length;
    arr[lastArrIndex].temp_avg = (
      ((arr[lastArrIndex].temp_avg * curListLeng)
        + elem.main.temp) / (curListLeng + 1)).toFixed(1);

    arr[lastArrIndex].temp.list.push(elem.main.temp.toFixed(1));
    if (elem.main.temp > arr[lastArrIndex].temp.max) arr[lastArrIndex].temp.max = elem.main.temp;
    if (elem.main.temp < arr[lastArrIndex].temp.min) arr[lastArrIndex].temp.min = elem.main.temp;

    arr[lastArrIndex].wind.list.push({
      speed: elem.wind.speed,
      direction: elem.wind.deg,
    });
    if (elem.wind.speed > arr[lastArrIndex].wind.max) arr[lastArrIndex].wind.max = elem.wind.speed;
    if (elem.wind.speed < arr[lastArrIndex].wind.min) arr[lastArrIndex].wind.min = elem.wind.speed;

    arr[lastArrIndex].humidity.list.push(elem.main.humidity);
    if (elem.main.humidity > arr[lastArrIndex].humidity.max) arr[lastArrIndex].humidity.max = elem.main.humidity;
    if (elem.main.humidity < arr[lastArrIndex].humidity.min) arr[lastArrIndex].humidity.min = elem.main.humidity;

    arr[lastArrIndex].rain.list.push(rain);
    if (rain > arr[lastArrIndex].rain.max) arr[lastArrIndex].rain.max = rain;
    if (rain < arr[lastArrIndex].rain.min) arr[lastArrIndex].rain.min = rain;

    arr[lastArrIndex].time.push(`${unixTime.getUTCHours()}:${unixTime.getUTCMinutes()}`);

    //set icon
    let icn = elem.weather[0].icon;
    if (icn.substr(0, 2) > arr[lastArrIndex].weather[icn.substr(2)].icon)
      arr[lastArrIndex].weather[icn.substr(2)].icon = icn
  })
  console.log('now arr is ', arr)
  return arr;
}



export function serializeForecast12Hours(data) {
  return /* (data.map(data => {
    const unixTime = new Date(0);
    unixTime.setUTCSeconds(data.EpochDateTime);
    return ({
      hour: unixTime.getHours(),
      minute: unixTime.getMinutes(),
      temperature: data.Temperature.Value,
      wind: {
        speed: data.Wind.Speed.Value,
        direction: data.Wind.Direction.degrees,
      },
      humidity: data.RelativeHumidity,
      rain: data.Rain.Value,
    })
  })) */
}