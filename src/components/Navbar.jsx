import Logo from "./Logo"
import Search from "./Search"
import Results from "./Results"

const Navbar = ()=>{
   return (
      <nav className="text-white bg-purple-700 flex justify-evenly py-3 items-center">
         <Logo />
         <Search />
         <Results />
      </nav>
   )
}

export default Navbar