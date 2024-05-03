import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



const Card = (props) => {
  const{_id,image,name,breed,age}=props.props
  console.log(props)
  const handleDelete=async(id)=>{
    try {
      axios.delete(`http://localhost:7007/routes/Delete/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='main'>
     
      
          <div className='container'>
      <div className='pet1'> 
        <img className='image1' src={image} alt="image-1" />
  <h3>{name}</h3>
  <h3>{breed}</h3>
  <h3>{age}</h3>
    <Link to={`/update_form/${_id}`}>
    <button>Update</button>
    </Link>
  
    <button onClick={()=>handleDelete(_id)}>Delete</button>
      
      </div>
      
     
      
      </div>
       
      
     
   
    
     </div>
    </div>
  )
}

export default Card
