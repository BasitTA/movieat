const StarRating = ()=>{

   return(
      <div className="m-8 p-5 flex flex-col text-start gap-3 bg-zinc-500 items-center rounded-lg">
         <span className="">⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ 10</span>
         <button className="font-bold bg-purple-700 size-4/5 p-1 rounded-full">+ Add to list </button>
      </div>
   )
}

export default StarRating