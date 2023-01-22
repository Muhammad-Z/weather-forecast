import Header from './Header';
import Main from './Main';
import './styles/style.css';
import './weather-icons.min.css';
import { useEffect, useState, createContext, useContext } from 'react';
import { useForecast, useForecastDispatch } from './ForecastContext';
import LoadingSpinner from './LoadingSpinner.jsx';

export default function App() {
  const ThemeContext = createContext(null);

  const forecast = useForecast();
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light-theme');
 
  useEffect(() => {
    if (forecast.location) setIsLoading(false);
  }, [forecast])

  //{/*  */}
  return (<ThemeContext.Provider value={theme}>
    <Header setTheme={setTheme}  />
    {isLoading ? <div className="loading-container"><LoadingSpinner /></div>
      : <Main />}
  </ThemeContext.Provider>
  )
}

