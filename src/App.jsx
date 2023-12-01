import { useState, useEffect } from 'react'
import getFormattedWeatherData from './api/weatherApi'
import './App.scss'
import Navbar from './navbar/Navbar'
import TemperatureDetails from './temperature details/TemperatureDetails'
import WeatherConditions from './weather conditions/WeatherConditions'

function App() {
  const [query, setQuery] = useState({q: 'lagos'});
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric')

  useEffect (() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({...query, units});
      setWeather(data);
    }
    fetchWeather();
  }, [query, units]);

  
  
  return (
    <div className='app'>
      <div className='wrapper'>
        <Navbar setQuery={ setQuery } units={ units } setUnits={ setUnits }/>

        { weather &&
        <>
          <TemperatureDetails weather={ weather }/>
          <WeatherConditions weather={ weather }/>
        </>
        }
      </div>
    </div>
  )
}

export default App
