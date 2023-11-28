//import { useState } from 'react'
import './App.scss'
import Navbar from './navbar/Navbar'
import TemperatureDetails from './temperature details/TemperatureDetails'

function App() {
  
  return (
    <div className='app'>
      <div className='wrapper'>
        <Navbar/>
        <TemperatureDetails/>
      </div>
    </div>
  )
}

export default App
