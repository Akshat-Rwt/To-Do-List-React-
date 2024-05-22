import React from 'react'

const page = () => {
  return (
    //Fragerant ( Empty Tag )
    <>
      <h1 className='bg-black text-white p-5 text-center font-bold text-5xl'> Akshat's TO DO LIST </h1>
   

    <form>
      <input type='text' 
      className='text 2xl border-zinc-800 border-4 m-5 px-4 py-2 '
      placeholder='Enter Task here ! ' // That thing is display on that box when there is nothing writtern 
      />

      <input type='text' 
      className='text 2xl border-zinc-800 border-4 m-5 px-4 py-2 '
      placeholder='Add Description here... ' 
      />

      <button className='bg-black text-white px-4 py-3 m-5 font-bold text-2xl rounded'> Add Task </button>

    </form>

    
    </>
  )
}

export default page