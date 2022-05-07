/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import useAnime from '../hooks/useAnime'
import '../css/card.css'
import Modal from './Modal'

const CardItems = () => {
    const {animeList} = useAnime()
    // console.log(animeList)
    return (
        
            <>
                {animeList.map(imagen => (
                    <div className='img-container' key={imagen.mal_id}>
                        <div className='img-container-flex'>
                            <img src={imagen.images.jpg.image_url} alt="" />
                        </div>
                        <div className='text-container'>
                            <p>Title: <span>{imagen.title}</span></p>
                            <p>Status: <span>{imagen.status}</span></p>
                        </div>
                        <div className='btn'>
                            <Modal id={imagen.mal_id} />
                        </div>
                    </div>
                ))}
                
            </>
        
    )
}

export default CardItems