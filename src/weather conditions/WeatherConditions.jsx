/* eslint-disable react/prop-types */
import './weatherConditions.scss'

export default function WeatherConditions({ weather: { humidity, speed}}) {
  return (
    <div className='weatherCond'>
        
        <p className="humid">
          
          <i className="humidIcon fa-solid fa-water"></i>
        
          <p className='content1'>
            <span className='humidPercent'>{ `${ humidity.toFixed() }%` }</span>
            <span className="name">Humidity</span>
          </p>
        
        </p>

        <p className="wind">
          
          <i className="windIcon fa-solid fa-wind"></i>
        
          <p className='content2'>
            <span className='windKm'>{ `${ speed.toFixed() } km/h` }</span>
            <span className="name">Wind Speed</span>
          </p>
        
        </p>
    
    </div>
  )
}
