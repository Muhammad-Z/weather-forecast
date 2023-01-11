import React, { createContext, useContext, useReducer } from 'react';

const ForecastContext = createContext(null);
const ForecastDispatchContext = createContext(null);

export function ForecastProvider({ children }) {
  const [forecast, dispatch] = useReducer(
    forecastReducer,
    initialForecast
  );

  return (
    <ForecastContext.Provider value={forecast}>
      <ForecastDispatchContext.Provider value={dispatch}>
        {children}
      </ForecastDispatchContext.Provider>
    </ForecastContext.Provider>
  );
}

export function useForecast() {
  return useContext(ForecastContext);
}

export function useForecastDispatch() {
  return useContext(ForecastDispatchContext);
}

function forecastReducer(forecast, action) {

  switch (action.type) {
    case 'loadLocation': {
      return ({
        ...forecast,
        location: action.payload
      })
    }
    case 'loadCurrentWeather': {
      return ({
        ...forecast,
        currentWeather: action.payload
      })
    }
    case 'loadForecast5Days': {
      return ({
        ...forecast,
        forecast5Days: action.payload
      })
    }
    case 'loadForecast12Hours': {
      return ({
        ...forecast,
        [action.payload[0].EpochDateTime]: action.payload
      })
    }

    case 'selectDay': {
      return ({
        ...forecast,
        selectedDay: action.payload
      })
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialForecast = {};
