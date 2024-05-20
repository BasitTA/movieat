import { useState } from "react"

const Layouting = () => {

   const [ isOpen, setIsOpen ] = useState(true)

   return (
      <>
         <nav className="text-white bg-purple-700 flex justify-evenly py-3 items-center">
            <a className="font-bold">🍿 Movieat</a>
            <input className="w w-1/2 p-2 rounded bg-purple-600" type="text" placeholder="Search movies..." />
            <p>Found 3 results</p>
         </nav>

         <main className='flex justify-evenly bg-zinc-800 size-full py-6 px-7 text-white'>
            
            {/* left container */}
            <div id="LeftContainer" className="border bg-zinc-700 size-full mx-2 rounded">
               <div className="flex flex-row-reverse mx-2 mt-2">
                  <button className="px-2 bg-zinc-800 rounded-full">-</button>
               </div>
               {/* movie card */}
               <div className="flex py-2 px-10 m-2 items-center">
                  <img className="h-16 rounded-sm" src="https://www.chasejarvis.com/wp-content/uploads/2013/02/ChaseJarvis_Lincoln-620x918.jpg"/>
                  <div className="block mx-4">
                     <h1 className="font-semibold">Judul</h1>
                     <p>🗓️ Tahun</p>
                  </div>
               </div>
            </div>


            {/* right container */}
            <div id="RightContainer" className="gap-y-3 border-solid border-2 bg-zinc-700 size-full mx-2 rounded">
               <div className="flex flex-row-reverse mx-2 mt-2">
                  <button className="px-2 bg-zinc-800 rounded-full">-</button>
               </div>
               {/* watched summary */}
               <div className="block py-2 px-10 m-2 rounded">
                  <h1 className="font-semibold">MOVIES YOU WATCHED</h1>
                  <div className="flex gap-x-2">
                     <p>#️⃣ 2 movies</p>
                     <p>⭐️ 8.65</p>
                     <p>🌟 9.5</p>
                     <p>⏳ 132 min</p>
                  </div>
               </div>

               {/* watched movie */}
               <div className="flex py-2 px-10 m-2 items-center">
                  <img className="h-16 rounded-sm" src="https://www.chasejarvis.com/wp-content/uploads/2013/02/ChaseJarvis_Lincoln-620x918.jpg"/>
                  <div className="block mx-4">
                     <h1 className="font-semibold">Judul</h1>
                     <div className="flex">
                        <p>⭐️ 8.95</p>
                        <p>🌟 9.4</p>
                        <p>⏳ 132 min</p>
                     </div>
                  </div>
               </div>
            </div>


         </main>
      </>
   )
}

export default Layouting