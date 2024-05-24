const SummaryWatchedMovies = ({ summaryWatchedMovieDatas })=>{
   const displaySummaryWatchedMovieDatas = summaryWatchedMovieDatas &&
      <div className="block py-2 px-10 m-2 rounded">
         <h1 className="font-semibold">{ summaryWatchedMovieDatas.title }</h1>
         <div className="flex gap-x-2">
            <p>#️⃣ { summaryWatchedMovieDatas.moviesCount } movies</p>
            <p>⭐️ { summaryWatchedMovieDatas.imdbRatingAverage }</p>
            <p>🌟 { summaryWatchedMovieDatas.myRatingAverage }</p>
            <p>⏳ { summaryWatchedMovieDatas.totalDurations } min</p>
         </div>
      </div>

   return(
      displaySummaryWatchedMovieDatas
   )
}

export default SummaryWatchedMovies