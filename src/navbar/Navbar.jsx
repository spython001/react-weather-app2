/* eslint-disable react/prop-types */
import { useState } from 'react'
import './navbar.scss'

export default function Navbar( { setQuery }) {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q:city })
  }

  //FOR ENTER KEY
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearchClick();
  }

  return (
    <div>
        
            <input 
              value={city}
              onChange = { (e) => setCity(e.currentTarget.value) }
              type="text" 
              placeholder="Search" 
              className='content'
              onKeyPress={handleKeyPress}
            />
            
            <span className='iconSpan'>
                <i className="icon content fa-solid fa-magnifying-glass" onClick={ handleSearchClick }></i>
            </span>

    </div> 
  )
}
