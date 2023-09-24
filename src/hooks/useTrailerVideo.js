import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTrailerVideo();
  }, []);

  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos",
      API_OPTIONS
    );

    const json = await data.json();
    const filterData = json.results.filter(
      (trailer) => trailer.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};
