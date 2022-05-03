import React from 'react'
import logo from '../img/logo.png'
import '../css/header.css'

const Header = () => {
  return (
    <div className='container'>
        <div className='logo-container'>
            <img src={logo} alt="LogoAnime" />
        </div>


        <div className='input-container'>
            <input type="text" placeholder='Buscador..' />
        </div>

        <div className='ul-container'>
            <ul>
                <li>Sobre Mi</li>
                <li>Acerca del proyecto</li>
            </ul>
        </div>

    </div>

  )
}

export default Header