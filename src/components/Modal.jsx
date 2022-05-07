import React from 'react'
import useAnime from '../hooks/useAnime'
import '../css/modal.css'

const Modal = ({id}) => {

    const {detailsAnime,getDetails} = useAnime()
    const {title,synopsis,images} = detailsAnime
    console.log(detailsAnime)
    
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
                    <h2 className="modal-title">{title}</h2>
                    <h4>Synopsis</h4>
                </div>

                <div className="modal-body">

                    <div>
                        <img src={images?.jpg.image_url} alt="ImagenContianer" />
                    </div>

                    <div className='paragraph'> 
                        {synopsis} 
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