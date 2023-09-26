import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_LOGO_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
        className=" w-screen"
          src={BG_LOGO_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
