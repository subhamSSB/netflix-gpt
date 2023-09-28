import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value)
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal,Koi mil gaya";
    // Make an API call to GPT and get movies results
    const gptSearchMovies = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptSearchMovies.choices) {
      //Todo show message
    }
    // console.log(gptSearchMovies.choices[0]?.message?.content.split(","));
    const gptMovies = gptSearchMovies.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults)
    dispatch(addGPTMovieResult({moviesName:gptMovies,movieResult:tmdbResults}))
  };
  return (
    <div className="pt-[55%]  md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="m-4 p-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 py-2 px-4 bg-red-700 text-white col-span-3 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
