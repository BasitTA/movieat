const ButtonDelete = ( props )=>{

   const handleDelete = ()=>{
      console.log('deleted', props.id)
   }


   return (
      <div className="flex flex-row-reverse justify-self-end">
         <button onClick={ handleDelete } className="px-2 bg-red-800 rounded-full">x</button>
      </div>
   )
}

export default ButtonDelete