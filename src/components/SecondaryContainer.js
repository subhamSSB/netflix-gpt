import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies.popularVideos);
  const trendingMovies = useSelector(store => store.movies.trendingMovies);
  return (
    <div className=" bg-black ">
      <div className=" -mt-24 md:-mt-72 relative z-10 pl-2 md:pl-12">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Trending" movies={trendingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Upcoming" movies={movies} />
      </div>

      {/* 
        Movielist - popular
          moviecard * n
        MovieList - Now playing
        MovieList - Trending
        MovieList - Horror
      */}
    </div>
  );
};

export default SecondaryContainer;
