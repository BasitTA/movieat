const movieDatas = [
   {
      id: 1,
      title: 'Def Film',
      year: 1998,
      img: 'https://www.chasejarvis.com/wp-content/uploads/2013/02/ChaseJarvis_Lincoln-620x918.jpg',
      date: '07 Nov 2015',
      duration: 120,
      imdbRating: 8.5,
      genres: ['Adventure','Biography'],
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actors: ['James','John'],
      director: ['Bob']
   },
   {
      id: 2,
      title: 'Abc Film',
      year: 2020,
      img: 'https://www.chasejarvis.com/wp-content/uploads/2013/02/ChaseJarvis_Lincoln-620x918.jpg',
      date: '07 Nov 2015',
      duration: 120,
      imdbRating: 8.5,
      genres: ['Adventure','Biography']
   },
]
// movies.map((m)=>console.log('a',m))
   
const watchedMovieDatas = [
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

const summaryWatchedMovieDatas = {
   title: 'MOVIES YOU WATCHED',
   moviesCount: watchedMovieDatas && watchedMovieDatas.length,
   imdbRatingAverage: watchedMovieDatas && watchedMovieDatas.reduce((acc,data)=>(acc+data.imdbRating),0)/watchedMovieDatas.length,
   myRatingAverage: watchedMovieDatas && watchedMovieDatas.reduce((acc,data)=>(acc+data.myRating),0)/watchedMovieDatas.length,
   totalDurations: watchedMovieDatas && watchedMovieDatas.reduce((acc,data)=>(acc+data.duration),0),
}

export { movieDatas, watchedMovieDatas, summaryWatchedMovieDatas }