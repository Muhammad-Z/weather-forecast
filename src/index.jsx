import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ForecastProvider } from './ForecastContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ForecastProvider>
      <App />
    </ForecastProvider>
  </React.StrictMode>,
)
