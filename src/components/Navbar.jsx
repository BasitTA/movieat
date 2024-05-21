const Navbar = ()=>{
   return (
      <nav className="text-white bg-purple-700 flex justify-evenly py-3 items-center">
         <a className="font-bold">🍿 Movieat</a>
         <input className="w w-1/2 p-2 rounded bg-purple-600" type="text" placeholder="Search movies..." />
         <p>Found 3 results</p>
      </nav>
   )
}

export default Navbar