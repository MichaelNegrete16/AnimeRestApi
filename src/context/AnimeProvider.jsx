import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AnimeContext = createContext()
const AnimeProvider = ({children}) => {

    const [animeList, setAnimeList] = useState([])
    const [detailsAnime, setDetailsAnime] = useState([])
    const [cargando, setCargando] = useState(false)
    const [cargandoModal, setCargandoModal] = useState(false)
    const [pageCount,setPageCount] = useState(0)
    const [buscar,setBuscar] = useState('')


    useEffect(()=> {

        const handleSubmit = async()=> {
            setCargando(true)
            try {
                const {data} = await axios('https://api.jikan.moe/v4/anime?page=1')
                setPageCount(data.pagination.last_visible_page)
                setAnimeList(data.data)
                setCargando(false)
            } catch (error) {
                console.log(error)
            } 
        }

        handleSubmit()
        
    },[])

    const handleSearch = async name => {
        
        try {
            const {data} = await axios(`https://api.jikan.moe/v4/anime?q=${name}`)
            setAnimeList(data.data)
            
        } catch (error) {
            console.log(error)
        }
        // console.log(name)
    }


    const getDetails = async id => {
        setCargandoModal(true)
        try {
            const {data} = await axios(`https://api.jikan.moe/v4/anime/${id}`)
            // console.log(data)
            setDetailsAnime(data.data)
            setCargandoModal(false)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handlePageClick = async (data) => {
        // console.log((data.selected)+1)
        let currentPage = (data.selected)+1
        const result = await handleClickPage(currentPage)
        setAnimeList(result)
    }

    const handleClickPage = async currentPage => {
        setCargando(true)
        try {
            const {data} = await axios(`https://api.jikan.moe/v4/anime?page=${currentPage}`) 
            setCargando(false)
            return data.data
        } catch (error) {
            console.log(error)
        }

    }





    return(
        <AnimeContext.Provider value={{animeList, 
                                        getDetails, 
                                        detailsAnime,
                                        cargando,
                                        handlePageClick,
                                        pageCount,
                                        cargandoModal,
                                        buscar,
                                        setBuscar,
                                        handleSearch}}>
            {children}
        </AnimeContext.Provider>
    )

}

export {
    AnimeProvider
}

export default AnimeContext