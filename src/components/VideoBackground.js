import React from "react";
import { useTrailerVideo } from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);

   const trailerVideo =  useSelector(trailer => trailer.movies?.trailerVideo);

  return (
    <div className=" w-screen z-50">
      <iframe
        className=" w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
