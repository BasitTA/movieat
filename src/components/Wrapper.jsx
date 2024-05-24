const Wrapper = ({children})=>{
   return(
      <main className='flex justify-evenly m-auto size-11/12 py-6 flex-wrap sm:flex-nowrap text-white'>  
         { children }
      </main>
   )
}

export default Wrapper