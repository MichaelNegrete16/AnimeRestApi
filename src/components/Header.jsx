import React from 'react'
import logo from '../img/logo.png'
import '../css/header.css'
import useAnime from '../hooks/useAnime'

const Header = () => {

    const {buscar,handleSearch,setBuscar} = useAnime()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(buscar)
    }

    return (
        <div className='container'>
            <div className='logo-container'>
                <img src={logo} alt="LogoAnime" />
            </div>


            <div className='input-container'>
                <form onSubmit={handleSubmit}>
                    <input name={buscar} type="text" placeholder='Buscador..' value={buscar} onChange={(e)=> setBuscar(e.target.value)} />
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" className="icono-search" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>  
            </div>
                

        </div>

    )
}

export default Header