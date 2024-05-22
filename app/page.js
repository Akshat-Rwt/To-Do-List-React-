"use client"
import React, { useState } from 'react'

const page = () => {
  // By using useStatesnippet We can make Variables in React .

  const [title, settitle] = useState("") 
  const [desc, setdesc] = useState("")
  
  //Problem : Its that when we submit the form it refresh and cannot store a value so for that thing we can add a function so that can store the value and when you submit the form it cannot reload the page 

  const submitHandler = (e)=>{
    console.log("hehen")
    e.preventDefault()
    settitle("")
    setdesc("")
  }

  return (
    //Fragerant ( Empty Tag )
    <>
      <h1 className='bg-black text-white p-5 text-center font-bold text-5xl'> Akshat's TO DO LIST </h1>
   

    <form onSubmit={submitHandler}>
      <input type='text' 
      className='text 2xl border-zinc-800 border-4 m-5 px-4 py-2 '
      placeholder='Enter Title here ! ' // That thing is display on that box when there is nothing writtern
      
      //2-Ways Binding 
      // Here I am doing 2-way binding . It means that tell the data to the react and also show the data to the user .

      value={title}  
      onChange={(e)=>{ 
        // console.log(e.target.value)
        settitle(e.target.value)
      }}
      />

      <input type='text' 
      className='text 2xl border-zinc-800 border-4 m-5 px-4 py-2 '
      placeholder='Add Description here... ' 

      value={desc}  
      onChange={(e)=>{ 
        // console.log(e.target.value)
        settitle(e.target.value)
      }} 
      />

      <button className='bg-black text-white px-4 py-3 m-5 font-bold text-2xl rounded'> Add Task </button>

    </form>

    
    </>
  )
}

export default page