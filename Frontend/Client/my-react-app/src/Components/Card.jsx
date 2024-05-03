import React, { useEffect, useState } from 'react'

const Card = (props) => {
  const[petsData,setPetsData]=useState(null)
  const{pets}=props
  console.log(props.props.pets)
  useEffect(()=>{
    setPetsData(props.props.pets)
  },[])
  return (
    <div>
      <div className='main'>
     
      {petsData && petsData.length>0 && petsData.map(ele=>{
        return(
          <div className='container'>
      <div className='pet1'> 
        <img className='image1' src={ele.image}	 alt="image-1" />
  <h3>{ele.name}</h3>
  <h3>{ele.breed}</h3>
  <h3>{ele.age}</h3>
  <h3>{ele.location}</h3>
      </div>
      
      
      
      </div>
        )
      })}
     
      
     

    
     </div>
    </div>
  )
}

export default Card
