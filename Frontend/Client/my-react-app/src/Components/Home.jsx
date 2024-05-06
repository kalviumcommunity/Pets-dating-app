import React from 'react'
import { useState,useEffect } from 'react'
import Card from './Card'
import axios from "axios"



const Home = () => {
  
    const [data, setData] = useState(null)
  const handleSelect =(select)=>{
    console.log(select)
    const obj = {
      user:select
    }
    if(select=="all"){
      getData()
    }else{
      axios.get(`http://localhost:8008/routes/getAllData?user=${obj.user}`).then((res)=>{
      console.log(res);
      setData(res.data.data);
      })
    }
    
  }
    function getData(){
      axios.get("http://localhost:8008/routes/getAllData").then((res)=>{
      console.log(res);
      setData(res.data.data);
      })
  
    }
    useEffect(()=>{
      getData()
    },[])
  
  
    return (
      <>
      <select name="" id="" onChange={(e)=>handleSelect(e.target.value)}>
        <option value="all">all</option>
        <option value="yashvardhan dadhich">yashvardhan dadhich</option>
        <option value="aiman singh">aiman singh</option>
      </select>
      {data && data.length>0 && data.map((ele)=>{
         return <Card props={ele}/>
      })}
      
         
      </>
    )
}

export default Home
