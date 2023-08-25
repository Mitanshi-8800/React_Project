import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div className='Landing_Page_Navbar'>
       <div className='Landing_Page_Logo'>
       <img src='/Image/Logo.png' alt='Logo'/>
      </div>
      <div className='Landing_Page_Options'>
       <ul>
        <li href='#'>Menu</li>
        <li href='#'>Location</li>
        <li href='#'>About</li>
        <li href='#'>Contact</li>
       </ul>
     
      </div>
      <div className='Landing_Page_Loginbuton'>
      <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar