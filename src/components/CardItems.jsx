import React from 'react'
import useAnime from '../hooks/useAnime'
import '../css/card.css'

const CardItems = () => {
    const {animeList} = useAnime()
    
    return (
        
            <>
                {animeList.map(imagen => (
                    <div className='img-container'>
                        <div className='img-container-flex'>
                            <img src={imagen.images.jpg.image_url} alt="" />
                        </div>
                        <div className='text-container'>
                            <p>Title: <span>{imagen.title}</span></p>
                            <p>Status: <span>{imagen.status}</span></p>
                        </div>
                        <div className='btn'>
                            <button>Ver Mas</button>
                        </div>
                    </div>
                ))}
            </>
        
    )
}

export default CardItems