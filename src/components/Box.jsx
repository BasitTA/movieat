import { useState } from "react"
import ButtonExpandable from "./ButtonExpandable"

const Box = ({ children })=>{
   const [ isOpen, setIsOpen ] = useState(true)

   const handleExpandClick = (isOpenFromChild)=>{
      setIsOpen(!isOpenFromChild)
   }
   return(
      <div className="bg-zinc-700 size-full m-2 rounded">
         <ButtonExpandable isOpen={ isOpen } onExpandClick={ handleExpandClick }/>
         { isOpen ? children : '' }  
      </div>
   )
}

export default Box