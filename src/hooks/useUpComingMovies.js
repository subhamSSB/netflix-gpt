import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";


export const useUpComingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUpcomingMovies();
    });

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS);
        const json = await data.json();

        dispatch(addUpcomingMovies(json.results))
    }
}