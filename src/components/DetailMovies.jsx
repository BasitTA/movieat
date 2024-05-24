import StarRating from "./StarRating"

const DetailMovies = ({detailMovieData})=>{
   const {title, img, date, duration, imdbRating, genres, desc, actors, director } = detailMovieData

   const genre = genres.map((genre)=>(
      <span key={genre}> {genre}, </span>
   ))

   const actor = actors.map((actor)=>(
      <span key={actor}> {actor}, </span>
   ))

   const displayDetailMovie = detailMovieData && 
      <div className="rounded">
         <div key={ title } className=" bg-slate-500 flex items-center">
            <img className="h-52 rounded-sm" src={ img }/>
            <div className="flex flex-col mx-10 gap-3">
               <h1 className="font-semibold">{ title }</h1>
               <p>{ date } - { duration } min </p>
               <p>{ genre }</p>
               <p>⭐️ { imdbRating } IMDB Rating</p>
            </div>
         </div>
         <StarRating />
         <div className="px-8 flex flex-col text-start gap-3 italic">
            <p>{ desc }</p>
            <p>Starring { actor }</p>
            <p>Directed by { director }</p>
         </div>
      </div>

   return(
      displayDetailMovie
   )
}

export default DetailMovies