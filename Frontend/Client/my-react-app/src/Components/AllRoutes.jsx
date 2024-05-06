import React from 'react'
import { Routes,Route,  } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import UpdateForm from './UpdateForm'
import Logout from './Logout'
import LoginForm from './LoginForm'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/update_form/:id' element={<UpdateForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/logout' element={<Logout/>}/>
    </Routes>
  )
}

export default AllRoutes
