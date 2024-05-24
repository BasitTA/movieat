const ButtonDelete = ({ id, onButtonDelete })=>{
   return (
      <div className="flex flex-row-reverse justify-self-end">
         <button onClick={ ()=>onButtonDelete(id) } className="px-2 bg-red-800 rounded-full">x</button>
      </div>
   )
}

export default ButtonDelete