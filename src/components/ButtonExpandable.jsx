const ButtonExpandable = ({ isOpen, onExpandClick })=>{

   return (
      <div className="flex flex-row-reverse mx-2 my-2">
         <button onClick={ ()=>onExpandClick(isOpen) } className="px-2 bg-zinc-800 rounded-full">{ isOpen ? '-' : '+' }</button>
      </div>
   )
}

export default ButtonExpandable