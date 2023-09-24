import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' pt-36 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className=' font-bold text-4xl'>{title}</h1>
      <p className='py-6 text-md w-1/4'>{overview}</p>
      <div>
        <button className=' bg-white  text-black p-2 rounded-lg px-16 m-4 hover:bg-opacity-20'> ▶️Play</button>
        <button className=' bg-gray-500  text-black p-2  bg-opacity-50 rounded-lg px-16 m-4'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
