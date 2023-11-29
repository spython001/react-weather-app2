//import { useState } from 'react'
import './App.scss'
import Navbar from './navbar/Navbar'
import TemperatureDetails from './temperature details/TemperatureDetails'
import WeatherConditions from './weather conditions/WeatherConditions'

function App() {
  
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
