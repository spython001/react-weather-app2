import { useState, useEffect } from 'react'
import getFormattedWeatherData from './api/weatherApi'
import './App.scss'
import Navbar from './navbar/Navbar'
import TemperatureDetails from './temperature details/TemperatureDetails'
import WeatherConditions from './weather conditions/WeatherConditions'
//import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({q: 'lagos'});
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric')

  useEffect (() => {
    const fetchWeather = async () => {
      //const message = query.q ? query.q : 'current loaction'
      //toast.info('Fetching weather for '+ message)

      const data = await getFormattedWeatherData({...query, units});

      //toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`)
      setWeather(data);
    }
    fetchWeather();
  }, [query, units]);

  
  const formatBackground = () => {
    if (!weather) {
      return 'linear-gradient(to bottom right, teal, #0b8fa6);';
    }
  
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) {
      return 'linear-gradient(to bottom right, teal, #0b8fa6);';
    }
    return 'linear-gradient(to right, #d97706, #dd6b20)';
  };
  
  return (
    <div className='app'>
      <div className={ `wrapper ? wrapper : ${formatBackground()}` }>
        <Navbar setQuery={ setQuery } />

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
