import React from 'react'
import { POSTER_IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className=' w-48 pr-4'>
      <img src={POSTER_IMG_URL+posterPath} />
    </div>
  )
}

export default MovieCard
