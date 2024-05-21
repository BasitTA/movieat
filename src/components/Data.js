const movies = [
   {
      id: 1,
      title: 'Def Film',
      year: 1998,
      img: 'https://www.chasejarvis.com/wp-content/uploads/2013/02/ChaseJarvis_Lincoln-620x918.jpg'
   },
   {
      id: 2,
      title: 'Abc Film',
      year: 2020,
      img: 'https://www.chasejarvis.com/wp-content/uploads/2013/02/ChaseJarvis_Lincoln-620x918.jpg'
   },
]
// movies.map((m)=>console.log('a',m))
   
const watchedMovies = [
   {
      id: 2,
      title: 'Abc Film',
      imdbRating: 8.3,
      myRating: 8.5,
      duration: 120,
      img: 'https://www.chasejarvis.com/wp-content/uploads/2013/02/ChaseJarvis_Lincoln-620x918.jpg'
   },
   {
      id: 1,
      title: 'Def Film',
      imdbRating: 8.3,
      myRating: 8.7,
      duration: 120,
      img: 'https://www.chasejarvis.com/wp-content/uploads/2013/02/ChaseJarvis_Lincoln-620x918.jpg'
   },
]

const summaryWatchedMovies = {
   title: 'MOVIES YOU WATCHED',
   moviesCount: watchedMovies && watchedMovies.length,
   imdbRatingAverage: watchedMovies && watchedMovies.reduce((acc,data)=>(acc+data.imdbRating),0)/watchedMovies.length,
   myRatingAverage: watchedMovies && watchedMovies.reduce((acc,data)=>(acc+data.myRating),0)/watchedMovies.length,
   totalDurations: watchedMovies && watchedMovies.reduce((acc,data)=>(acc+data.duration),0),
}

export { movies, watchedMovies, summaryWatchedMovies }