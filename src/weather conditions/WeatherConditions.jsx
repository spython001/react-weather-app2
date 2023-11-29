import './weatherConditions.scss'

export default function WeatherConditions() {
  return (
    <div className='weatherCond'>
        <p className="humid">
          <i className="humidIcon fa-solid fa-water"></i>
        
          <p className='content1'>
            <span className='humidPercent'>64%</span>
            <span className="name">Humidity</span>
          </p>
        </p>

        <p className="wind">
          <i className="windIcon fa-solid fa-wind"></i>
        
          <p className='content2'>
            <span className='windKm'>18 km/h</span>
            <span className="name">Wind Speed</span>
          </p>
        </p>
    </div>
  )
}
