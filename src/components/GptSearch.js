import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_LOGO_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed md:absolute -z-10">
        <img className=" h-screen object-cover w-screen" src={BG_LOGO_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
