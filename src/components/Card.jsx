import React from 'react'
import '../css/card.css'
import CardItems from './CardItems'
import Pagination from './Pagination'

const Card = () => {

    return (
        <>
            <div className='container-grid-items'>
                <div className='card-container'>
                    <CardItems/>
                </div>
                <div className='page-content'>
                    <Pagination/>
                </div>
            </div>
        </>
        
    )
}

export default Card