import { useState } from "react"
import Navbar from "./Navbar"
import MovieCard from "./MovieCard"
import ButtonExpandable from "./ButtonExpandable"
import { movies, summaryWatchedMovies, watchedMovies } from "./Data"

const Layouting = () => {
   const [isOpenLeft,setIsOpenLeft] = useState(true)
   const [isOpenRight,setIsOpenRight] = useState(true)

   const handleExpandClick = (isOpenFromChild, position)=>{
      position==='left' ? setIsOpenLeft(!isOpenFromChild) : setIsOpenRight(!isOpenFromChild)
   }

   return (
      <>
         <Navbar />
         <main className='flex justify-evenly m-auto size-11/12 py-6 flex-wrap sm:flex-nowrap text-white'>
            {/* left container */}
            <div id="LeftContainer" className="bg-zinc-700 size-full m-2 rounded">
               {/* button open/close */}
               <ButtonExpandable position='left' isOpen={ isOpenLeft } onExpandClick={ handleExpandClick }/>
               {/* movie card */}
               { isOpenLeft ? <MovieCard movies = { movies } /> : '' }
               
            </div>

            {/* right container */}
            <div id="RightContainer" className="gap-y-3 bg-zinc-700 size-full m-2 rounded">  
               {/* button open/close */}
               <ButtonExpandable position='right' isOpen={ isOpenRight } onExpandClick={ handleExpandClick }/>
               {/* watched summary & watched movies */}
               { isOpenRight ? <>
                  <MovieCard summaryWatchedMovies={ summaryWatchedMovies }/>
                  <MovieCard watchedMovies={ watchedMovies }/>
               </> : '' }
            </div>
         </main>
      </>
   )
}

export default Layouting