import { useState } from "react"

const Movies = ({ movieDatas })=>{
   const [ movies, setMovies ] = useState(movieDatas)

   const displayMovies = movies && movies.map((movie)=>(
         <div key={ movie.title } className="flex py-2 px-10 m-2 items-center">
            <img className="h-16 rounded-sm" src={ movie.img }/>
            <div className="block mx-4">
               <h1 className="font-semibold">{ movie.title }</h1>
               <p>🗓️ { movie.year }</p>
            </div>
         </div>
      )
   )

   return(
      displayMovies
   )
}

export default Movies