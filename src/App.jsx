//import { useState } from 'react'
import getFormattedWeatherData from './api/weatherApi'
import './App.scss'
import Navbar from './navbar/Navbar'
import TemperatureDetails from './temperature details/TemperatureDetails'
import WeatherConditions from './weather conditions/WeatherConditions'

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'Lagos' });
    console.log(data)
  }
  fetchWeather();
  
  
  return (
    <div className='app'>
      <div className='wrapper'>
        <Navbar/>
        <TemperatureDetails/>
        <WeatherConditions/>
      </div>
    </div>
  )
}

export default App
