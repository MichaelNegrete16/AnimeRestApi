import AnimeContext from "../context/AnimeProvider";
import { useContext } from "react";

const useAnime = () => {
    return useContext(AnimeContext)
}

export default useAnime