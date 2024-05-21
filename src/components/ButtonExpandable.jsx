import { useState } from "react"

const ButtonExpandable = ({ position, isOpen, onExpandClick })=>{

   return (
      <div className="flex flex-row-reverse mx-2 my-2">
         <button onClick={ ()=>onExpandClick(isOpen, position) } className="px-2 bg-zinc-800 rounded-full">{ isOpen ? '-' : '+' }</button>
      </div>
   )
}

export default ButtonExpandable