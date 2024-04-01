import { useState,useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function getData(){
    axios.get("http://localhost:3000/ping").then((res)=>{
    console.log(res);
    })

  }
  useEffect(()=>{
    getData()
  },[])


  return (
    <>
     <div className='main'>
      <h1 className='heading'>Pets Dating App</h1>
     
      <div className='container'>
      <div className='pet1'> 
        <img className='image1' src="https://plus.unsplash.com/premium_photo-1683134036144-82b0a3d50f11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFicmFkb3IlMjByZXRyaWV2ZXJ8ZW58MHx8MHx8fDA%3D									
" alt="image-1" />
  <h3>Max</h3>
      </div>
      
      
      <div className='pet2'>
        <img className='image2' src="https://images.unsplash.com/photo-1611305366162-ce5d41340817?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWdsZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D
" alt="image-2" />
  <h3>Olivia</h3>
      </div>
      </div>
     

    
     </div>
       
    </>
  )
}

export default App
