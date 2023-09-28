import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";


export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularVideos)
    useEffect(() => {
        !popularMovies && getPopularMovies()
    },[]);


    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
        const json = await data.json();

        dispatch(addPopularMovies(json.results))
    }
}