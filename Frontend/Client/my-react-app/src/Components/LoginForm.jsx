import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    console.log(email,password)
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const obj={email:email,password:password}
       try {
       const data= await axios.post("http://localhost:8008/routes/login",obj)
        alert(data.data.message)
        document.cookie = `token=${data.data.Token}`
        console.log(data)
       } catch (error) {
        console.log(error)
       }
        
    }
  return (
    <div>
      <form action="">
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email'/>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default LoginForm
