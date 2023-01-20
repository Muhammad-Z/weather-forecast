//controller
/* import api from './api';*/
import { useForecastDispatch } from "../ForecastContext.jsx";
import { serializefiveDays, serializeForecast12Hours } from './serializer';


export function getCities(options) {
  const dispatch = useForecastDispatch();

  return (
    api.get(`http://dataservice.accuweather.com/locations/v1/cities/search
    ?q=${options.city_name}`).then(res => serializeCities(res))
      .then(data => dispatch({
        type: 'load',
        payload: data
      }))
  )
}

export function getCurrentWeather(options) {
  const dispatch = useForecastDispatch();

  return (
    api.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}`)
      .then(res => serializeCurrentWeather(res)))
}

export function getForecast12Hours(options) {
  return (serializeForecast12Hours([{"DateTime":"2023-01-04T19:00:00+00:00","EpochDateTime":1672858800,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":53.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":48.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":42.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":15.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":255,"Localized":"WSW","English":"WSW"}},"WindGust":{"Speed":{"Value":23.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":255,"Localized":"WSW","English":"WSW"}},"RelativeHumidity":67,"IndoorRelativeHumidity":39,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":1800.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":95,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=19&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=19&lang=en-us"},{"DateTime":"2023-01-04T20:00:00+00:00","EpochDateTime":1672862400,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":53.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":48.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":42.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":15.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":254,"Localized":"WSW","English":"WSW"}},"WindGust":{"Speed":{"Value":23.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":254,"Localized":"WSW","English":"WSW"}},"RelativeHumidity":67,"IndoorRelativeHumidity":39,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":30000.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":97,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=20&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=20&lang=en-us"},{"DateTime":"2023-01-04T21:00:00+00:00","EpochDateTime":1672866000,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":52.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":48.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":42.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":14.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":253,"Localized":"WSW","English":"WSW"}},"WindGust":{"Speed":{"Value":23.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":253,"Localized":"WSW","English":"WSW"}},"RelativeHumidity":69,"IndoorRelativeHumidity":39,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":30000.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":99,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=21&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=21&lang=en-us"},{"DateTime":"2023-01-04T22:00:00+00:00","EpochDateTime":1672869600,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":52.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":42.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":13.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":254,"Localized":"WSW","English":"WSW"}},"WindGust":{"Speed":{"Value":26.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":254,"Localized":"WSW","English":"WSW"}},"RelativeHumidity":70,"IndoorRelativeHumidity":39,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":30000.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":98,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=22&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=22&lang=en-us"},{"DateTime":"2023-01-04T23:00:00+00:00","EpochDateTime":1672873200,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":52.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":45.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":43.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":13.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":259,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":28.0,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":259,"Localized":"W","English":"W"}},"RelativeHumidity":71,"IndoorRelativeHumidity":40,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":30000.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":96,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=23&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=1&hbhhour=23&lang=en-us"},{"DateTime":"2023-01-05T00:00:00+00:00","EpochDateTime":1672876800,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":51.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":43.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":12.7,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":262,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":31.1,"Unit":"mi/h","UnitType":9}},"RelativeHumidity":72,"IndoorRelativeHumidity":40,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":30000.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":95,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=0&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=0&lang=en-us"},{"DateTime":"2023-01-05T01:00:00+00:00","EpochDateTime":1672880400,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":51.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":43.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":12.7,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":262,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":29.9,"Unit":"mi/h","UnitType":9}},"RelativeHumidity":74,"IndoorRelativeHumidity":40,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":30000.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":95,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=1&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=1&lang=en-us"},{"DateTime":"2023-01-05T02:00:00+00:00","EpochDateTime":1672884000,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":51.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":43.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":11.5,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":262,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":28.8,"Unit":"mi/h","UnitType":9}},"RelativeHumidity":75,"IndoorRelativeHumidity":41,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":1900.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":96,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=2&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=2&lang=en-us"},{"DateTime":"2023-01-05T03:00:00+00:00","EpochDateTime":1672887600,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":51.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":44.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":11.5,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":262,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":27.6,"Unit":"mi/h","UnitType":9}},"RelativeHumidity":77,"IndoorRelativeHumidity":41,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":1900.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":96,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=3&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=3&lang=en-us"},{"DateTime":"2023-01-05T04:00:00+00:00","EpochDateTime":1672891200,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":50.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":44.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":44.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":11.5,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":263,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":23.0,"Unit":"mi/h","UnitType":9}},"RelativeHumidity":78,"IndoorRelativeHumidity":41,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":23800.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":96,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=4&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=4&lang=en-us"},{"DateTime":"2023-01-05T05:00:00+00:00","EpochDateTime":1672894800,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":50.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":43.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":43.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":44.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":11.5,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":265,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":20.7,"Unit":"mi/h","UnitType":9}},"RelativeHumidity":79,"IndoorRelativeHumidity":41,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":23800.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":95,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=5&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=5&lang=en-us"},{"DateTime":"2023-01-05T06:00:00+00:00","EpochDateTime":1672898400,"WeatherIcon":7,"IconPhrase":"Cloudy","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":50.0,"Unit":"F","UnitType":18},"RealFeelTemperature":{"Value":43.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"RealFeelTemperatureShade":{"Value":43.0,"Unit":"F","UnitType":18,"Phrase":"Chilly"},"WetBulbTemperature":{"Value":47.0,"Unit":"F","UnitType":18},"DewPoint":{"Value":44.0,"Unit":"F","UnitType":18},"Wind":{"Speed":{"Value":11.5,"Unit":"mi/h","UnitType":9},"Direction":{"Degrees":266,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":19.6,"Unit":"mi/h","UnitType":9}},"RelativeHumidity":80,"IndoorRelativeHumidity":41,"Visibility":{"Value":10.0,"Unit":"mi","UnitType":2},"Ceiling":{"Value":23800.0,"Unit":"ft","UnitType":0},"UVIndex":0,"UVIndexText":"Low","PrecipitationProbability":0,"ThunderstormProbability":0,"RainProbability":0,"SnowProbability":0,"IceProbability":0,"TotalLiquid":{"Value":0.0,"Unit":"in","UnitType":1},"Rain":{"Value":0.0,"Unit":"in","UnitType":1},"Snow":{"Value":0.0,"Unit":"in","UnitType":1},"Ice":{"Value":0.0,"Unit":"in","UnitType":1},"CloudCover":95,"Evapotranspiration":{"Value":0.0,"Unit":"in","UnitType":1},"SolarIrradiance":{"Value":0.0,"Unit":"W/m²","UnitType":33},"MobileLink":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=6&lang=en-us","Link":"http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=6&lang=en-us"}]))
}

export function getfiveDays(options) {

  /*   return (api.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`)
      .then(res => serializefiveDays(res)) */

  return (serializefiveDays({

    "Headline": {
      "EffectiveDate": "2023-01-01T13:00:00+00:00",
      "EffectiveEpochDate": 1672578000,
      "Severity": 4,
      "Text": "Expect showery weather Sunday afternoon through Monday morning",
      "Category": "rain",
      "EndDate": "2023-01-02T13:00:00+00:00",
      "EndEpochDate": 1672664400,
      "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us",
      "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2023-01-01T07:00:00+00:00",
        "EpochDate": 1672556400,
        "Temperature": {
          "Minimum": {
            "Value": 44,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 55,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us"
      },
      {
        "Date": "2023-01-02T07:00:00+00:00",
        "EpochDate": 1672642800,
        "Temperature": {
          "Minimum": {
            "Value": 38,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 48,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 13,
          "IconPhrase": "Mostly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us"
      },
      {
        "Date": "2023-01-03T07:00:00+00:00",
        "EpochDate": 1672729200,
        "Temperature": {
          "Minimum": {
            "Value": 53,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 54,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 14,
          "IconPhrase": "Partly sunny w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us"
      },
      {
        "Date": "2023-01-04T07:00:00+00:00",
        "EpochDate": 1672815600,
        "Temperature": {
          "Minimum": {
            "Value": 47,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 58,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us"
      },
      {
        "Date": "2023-01-05T07:00:00+00:00",
        "EpochDate": 1672902000,
        "Temperature": {
          "Minimum": {
            "Value": 46,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 55,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 6,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us"
      }
    ]
  })
  )

}