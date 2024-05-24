import Navbar from "./Navbar"
import { movieDatas, summaryWatchedMovieDatas, watchedMovieDatas } from "./Data"
import Wrapper from "./Wrapper"
import Box from "./Box"
import Movies from "./Movies"
import SummaryWatchedMovies from "./SummaryWatchedMovies"
import WatchedMovies from "./WatchedMovies"
import DetailMovies from "./DetailMovies"

const Layouting = () => {
   return (
      <>
         <Navbar />
         <Wrapper>
            <Box>
               <Movies movieDatas={ movieDatas } />
            </Box>
           <Box>
               <DetailMovies detailMovieData={ movieDatas[0] } />
               <SummaryWatchedMovies summaryWatchedMovieDatas={ summaryWatchedMovieDatas } />
               <WatchedMovies watchedMovieDatas={ watchedMovieDatas } />
            </Box>
         </Wrapper>
      </>
   )
}

export default Layouting