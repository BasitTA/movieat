import ButtonDelete from "./ButtonDelete"

const MovieCard = ( props )=>{
   const { movies, summaryWatchedMovies, watchedMovies } = props

   const displayMovies = 
      movies && movies.map((movie)=>{
         return(
            <div key={ movie.title } className="flex py-2 px-10 m-2 items-center">
               <img className="h-16 rounded-sm" src={ movie.img }/>
               <div className="block mx-4">
                  <h1 className="font-semibold">{ movie.title }</h1>
                  <p>🗓️ { movie.year }</p>
               </div>
            </div>
         )
      })  

   const displaySummaryWatchedMovies = summaryWatchedMovies &&
      <div className="block py-2 px-10 m-2 rounded">
         <h1 className="font-semibold">{ summaryWatchedMovies.title }</h1>
         <div className="flex gap-x-2">
            <p>#️⃣ { summaryWatchedMovies.moviesCount } movies</p>
            <p>⭐️ { summaryWatchedMovies.imdbRatingAverage }</p>
            <p>🌟 { summaryWatchedMovies.myRatingAverage }</p>
            <p>⏳ { summaryWatchedMovies.totalDurations } min</p>
         </div>
      </div>

   const displayWatchedMovies = 
      watchedMovies && watchedMovies.map((watchedMovie)=>{
         return(
            <div key={ watchedMovie.title } className="flex py-2 px-10 m-2 items-center">
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
               <ButtonDelete id={ watchedMovie.id }/>
            </div>
         )
      })

   return (
      <>
         {/* movies */}
         { movies ? displayMovies : '' }

         {/* summary watched movies */}
         { summaryWatchedMovies ? displaySummaryWatchedMovies : '' }

         {/* watched movies */}
         { watchedMovies ? displayWatchedMovies : '' }
      </>
   )
}

export default MovieCard