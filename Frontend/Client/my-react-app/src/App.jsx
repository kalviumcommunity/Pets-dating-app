import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './Components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function getData(){
    axios.get("http://localhost:7007/ping").then((res)=>{
    console.log(res);
    })

  }
  useEffect(()=>{
    getData()
  },[])


  return (
    <>
     <Card/>
       
    </>
  )
}

export default App
