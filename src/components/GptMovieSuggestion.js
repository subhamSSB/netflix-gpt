import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {movieResult,moviesName} = useSelector(store => store.gpt);
  if(!moviesName) return null;

  return (
    <div className=" p-4 m-4 bg-black  text-white opacity-90">
      <div>
        {
          moviesName.map((moviesName,index) => <MovieList key={moviesName} title={moviesName} movies={movieResult[index]}/>)
        }
        
      </div>
    </div>  
  )
}

export default GptMovieSuggestion
