import React, { useEffect, useState } from 'react'

const Card = (props) => {
  // const[petsData,setPetsData]=useState(null)
  const{image,name,breed,age}=props.props
  console.log(props)
  return (
    <div>
      <div className='main'>
     
      
          <div className='container'>
      <div className='pet1'> 
        <img className='image1' src={image} alt="image-1" />
  <h3>{name}</h3>
  <h3>{breed}</h3>
  <h3>{age}</h3>
      </div>
      
      
      
      </div>
       
      
     

    
     </div>
    </div>
  )
}

export default Card
