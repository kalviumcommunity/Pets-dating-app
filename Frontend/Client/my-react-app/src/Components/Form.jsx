import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [name,setName]=useState()
    const [image,setImage]=useState()
    const [breed,setBreed]=useState()
    const [age,setAge]=useState()
    const handleSubmit=async(e)=>{
        const obj = {
            name:name,
            image:image,
            breed:breed,
            age:age,
        }
    try {
        axios.post("http://localhost:7007/routes/Create",obj)
    } catch (error) {
        console.log(error)
    }
    }
  return (
   <form onSubmit={handleSubmit}>
    <input placeholder='Name' onChange={(e)=>setName(e.target.value)} type="text" />
    <input  placeholder='Image url' onChange={(e)=>setImage(e.target.value)} type="url" />
    <input placeholder='Breed Name' onChange={(e)=>setBreed(e.target.value)} type="text" />
    <input placeholder='Age' onChange={(e)=>setAge(e.target.value)} type="number" />
    <input type="submit" />
   </form>
  )
}

export default Form
