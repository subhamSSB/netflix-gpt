import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' p-6 md:pt-36 md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className=' text-2xl font-bold md:text-4xl'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-md w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className=' bg-white  text-black md:p-2 rounded-lg md:px-16 md:m-4 py-1 px-2 hover:bg-opacity-20'> ▶️Play</button>
        <button className='hidden md:inline-block bg-gray-500  text-black p-2  bg-opacity-50 rounded-lg px-16 m-4'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
