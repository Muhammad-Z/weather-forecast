import React, { createContext, useContext, useReducer } from 'react';

const WeatherContext = createContext(null);
const WeatherDispatchContext = createContext(null);

export function WeatherProvider({ children }) {
  const [weather, dispatch] = useReducer(
    weatherReducer,
    initialWeather
  );

  return (
    <WeatherContext.Provider value={weather}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}

export function useWeatherDispatch() {
  return useContext(WeatherDispatchContext);
}

function weatherReducer(weather, action) {

  switch (action.type) {
    case 'toggle': {
      return {
        ...weather,
        [action.payload]: !weather[action.payload]
      }
    }
    case 'changeLength': {
      return {
        ...weather,
        passLeng: action.payload
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialWeather = {

};
