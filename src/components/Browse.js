import React, { useEffect } from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/**
       * Maincontainer
          - vdo Backgroung
          - video Title
      
        SecondaryContainer
          - Movieslist * n (row)
            - cards * n
       */}
    </div>
  );
};

export default Browse;
