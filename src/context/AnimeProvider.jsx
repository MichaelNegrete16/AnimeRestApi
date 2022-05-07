import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AnimeContext = createContext()
const AnimeProvider = ({children}) => {

    const [animeList, setAnimeList] = useState([])
    const [detailsAnime, setDetailsAnime] = useState([])

    const handleSubmit = async()=> {
        try {
            const {data} = await axios('https://api.jikan.moe/v4/anime')
            setAnimeList(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getDetails = async id => {
        try {
            const {data} = await axios(`https://api.jikan.moe/v4/anime/${id}`)
            // console.log(data)
            setDetailsAnime(data.data)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=> {
        handleSubmit()
    },[])


    return(
        <AnimeContext.Provider value={{animeList, getDetails, detailsAnime}}>
            {children}
        </AnimeContext.Provider>
    )

}

export {
    AnimeProvider
}

export default AnimeContext