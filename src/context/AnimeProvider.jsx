import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AnimeContext = createContext()
const AnimeProvider = ({children}) => {

    const [animeList, setAnimeList] = useState([])
    const [images, setImages] = useState([])

    const handleSubmit = async()=> {
        try {
            const {data} = await axios('https://api.jikan.moe/v4/anime')
            setImages(data.data)
            setAnimeList(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        handleSubmit()
    },[])


    return(
        <AnimeContext.Provider value={{animeList,images}}>
            {children}
        </AnimeContext.Provider>
    )

}

export {
    AnimeProvider
}

export default AnimeContext