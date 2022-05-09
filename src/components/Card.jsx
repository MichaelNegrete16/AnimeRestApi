import React from 'react'
import '../css/card.css'
import CardItems from './CardItems'
import Pagination from './Pagination'
import useAnime from '../hooks/useAnime'

const Card = () => {

    const {cargando}=useAnime()

    return (
        <>
            <div className='container-grid-items'>
                <div className='card-container'>
                    {cargando ? <p>Cargando...</p> : <CardItems/>}
                </div>
                <div className='page-content'>
                    <Pagination/>
                </div>
            </div>
        </>
        
    )
}

export default Card