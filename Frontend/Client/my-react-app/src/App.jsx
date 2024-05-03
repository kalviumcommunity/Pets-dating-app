import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './Components/Card'

import './App.css'

function App() {
  const [data, setData] = useState(null)

  function getData(){
    axios.get("http://localhost:7007/routes/getAllData").then((res)=>{
    console.log(res);
    setData(res.data.data);
    })

  }
  useEffect(()=>{
    getData()
  },[])
console.log(data)

  return (
    <>
    {data && data.length>0 && data.map((ele)=>{
       return <Card props={ele}/>
    })}
    
       
    </>
  )
}

export default App
