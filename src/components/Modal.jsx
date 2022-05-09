import React from 'react'
import useAnime from '../hooks/useAnime'
import '../css/modal.css'
import { useState, useEffect } from 'react'

import PlayIcon from '../img/playicon.svg'
import Spinner from './Spinner'

const Modal = ({id}) => {

    const {detailsAnime,getDetails,cargandoModal} = useAnime()
    const {title,synopsis,images,genres,episodes,airing,demographics,trailer} = detailsAnime
    const [generos,setGeneros] = useState([])
    const [generosAdultos,setGenerosAdultos] = useState([])
    
    useEffect(()=>{
        setGeneros(genres)
        setGenerosAdultos(demographics)
    },[genres,demographics])
    
    // console.log(detailsAnime)

    return (
        <div className='container-modal'>
            {/* <!-- Trigger the modal with a button --> */}
           
            <button onClick={()=>getDetails(id)} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Ver Mas</button>
            {/* <!-- Modal --> */}
            <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                {/* <!-- Modal content--> */}
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    {cargandoModal ? <Spinner/>
                    : <>
                        <h2 className="modal-title">{title}</h2>
                        <h4>Synopsis</h4>
                    </>}
                </div>

                <div className="modal-body">

                    <div className='content-body'>
                        <div className='display-imagen'>
                            {cargandoModal ? <Spinner/>
                            : <>
                                <img src={images?.jpg.image_url} alt="ImagenContianer" />
                                <div className='buton-play'>
                                    <a href={trailer?.url} target='_blank' rel='noreferrer'>
                                        <img src={PlayIcon} alt="BotonDePlay" />
                                    </a>
                                </div>
                            </>}
                        </div>

                        <div className='paragraph'> 
                            {cargandoModal ? <Spinner/>
                            : <>
                                <p className='synopsis-p'>{synopsis}</p> 
                                <div>
                                    {airing 
                                            ? <p className='in-airing-true'>En aire</p> 
                                            :(
                                                <div className='details-content'>
                                                    <p className='episodes-p'>Episodios: {episodes}</p>
                                                    <p className='in-airing-false'>Finalizado</p> 
                                                </div>
                                            )}
                                </div>
                            </>}
                        </div>
                    </div>
                    
                    <div className='content-generos'>
                            {cargandoModal ? <Spinner/>
                            : <>
                                {generos?.map(genero=> (
                                <div className='content-generos-name'>
                                    <a key={genero.mal_id} href={genero.url}> {genero.name} </a>
                                </div>
                                ))}
                                {generosAdultos?.map(genero=> (
                                    <div className='content-generos-name'>
                                        <a key={genero.mal_id} href={genero.url}> {genero.name} </a>
                                    </div>
                                ))}
                            </>}
                    </div>

                </div>
                

                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>

            </div>
            
            </div>
        </div>
    )
}

export default Modal