import './temperatureDetails.scss'

export default function TemperatureDetails() {
  return (
    <div className='temp'>
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather imgs" />

        <span className='celsius'>24°c</span>
        <span className='city'>
            <span>London</span>
            <span className='time'>11:45AM</span>
        </span>
    </div>
  )
}
