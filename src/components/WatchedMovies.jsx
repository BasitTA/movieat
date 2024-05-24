import { useState } from "react"
import ButtonDelete from "./ButtonDelete"

const WatchedMovies = ({ watchedMovieDatas })=>{
   let watchedMoviesUpdated = null
   const [ watchedMovies, setWatchedMovies ] = useState(watchedMovieDatas)
   
   // handling delete watched movie
   const handleButtonDelete = (idFromChild)=>{
      watchedMoviesUpdated = watchedMovies.filter((watchedMovie)=>(watchedMovie.id!==idFromChild))
      setWatchedMovies(watchedMoviesUpdated)
   }

   
   const displayWatchedMovieDatas = watchedMovies && watchedMovies.map((watchedMovie)=>(
      <div key={ watchedMovie.title } className="flex py-2 px-10 m-2 items-center">
         {console.table(watchedMovie)}
         <img className="h-16 rounded-sm" src={ watchedMovie.img }/>
         <div className="block mx-4 w-full">
            <h1 className="font-semibold">{ watchedMovie.title }</h1>
            <div className="flex gap-x-2">
               <p>⭐️ { watchedMovie.imdbRating }</p>
               <p>🌟 { watchedMovie.myRating }</p>
               <p>⏳ { watchedMovie.duration } min</p>
               <p className="justify-self-end">⏳ { watchedMovie.duration } min</p>
            </div>
         </div>
         <ButtonDelete id={ watchedMovie.id } onButtonDelete={ handleButtonDelete }/>
      </div>
   ))

   return(
      displayWatchedMovieDatas
   )
}

export default WatchedMovies