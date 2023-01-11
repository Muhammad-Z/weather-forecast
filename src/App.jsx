import Header from './Header';
import Main from './Main';
import './App.css';
import './weather-icons.min.css';
import { ForecastProvider } from './ForecastContext';
import { useState } from 'react';

export default function App() {
  const [renderKey, setRenderKey] = useState(Date.now());
  console.log('yo sup')

  return (
    <>
      <ForecastProvider>
        <Header key={renderKey} setRenderKey={setRenderKey} />
        <Main />
      </ForecastProvider>
    </>
  )
}

