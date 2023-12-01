/* eslint-disable react/prop-types */
import './temperatureDetails.scss'
import { iconUrlFromCode, formatToLocalTime } from '../api/weatherApi'

export default function TemperatureDetails({ weather: { icon, dt, temp, name }}) {
  return (
    <div className='temp'>
        <img src={iconUrlFromCode(icon)} alt="weather imgs" />

        <span className='celsius'>{`${(temp).toFixed()}`}°c</span>
        <span className='city'>
            <span>{ `${ name }`}</span>
            <span className='time'>{formatToLocalTime(dt)}</span>
        </span>
    </div>
  )
}
