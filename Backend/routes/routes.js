
const express = require('express');
const { petsModel } = require('../model/pets.model');
const { UserModel } = require('../model/UserModel');
const router= express.Router();

var jwt = require('jsonwebtoken');


router.get("/getAllData", async(req,res)=>{
    const user = req.query
    console.log(user)
    if (user.user){
        try{
            let result =await petsModel.find({created_by:user.user})
            res.json({message:"successfully fetched the data", data:result})
        }catch(error){
            console.log(error)
            res.send({error})
        }
    }else{
        try{
            let result =await petsModel.find()
            res.json({message:"successfully fetched the data", data:result})
        }catch(error){
            console.log(error)
            res.send({error})
        }
    }
   
})


router.post('/Create' , async(req,res)=>{
    let payload = req.body
    try {
        await petsModel.create(payload)
        res.send({message:"successfully added to the DB"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.put('/Update/:id' , async(req,res)=>{
    let payload = req.body
    let id = req.params.id
    try {
        await petsModel.findByIdAndUpdate(id,payload)
        res.send({message:"successfully updated the document"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})



router.delete('/Delete/:id' , async(req,res)=>{
    // let payload = req.body
    let id = req.params.id
    try {
        await petsModel.findByIdAndDelete(id)
        res.send({message:"successfully deleted the document"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.post('/signup' , async(req,res)=>{
    let payload = req.body
    try {
        await UserModel.create(payload)
        res.send({message:"account craeted successfully!"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})


router.post('/login' , async(req,res)=>{
    let {email,password} = req.body
    try {
       let user= await UserModel.findOne({email})
      if(user){
        if(user.password==password){
            var token = jwt.sign(user.email,'Yash');
            res.send({message:"login successful!",Token:token})
           }else{
            res.send({message:"password is incorrect"})
           }
      }else{
        res.send({message:"user does not exist"})
      }
      
       
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})


router.post('/logout' , async(req,res)=>{
    res.send({message:"logout successful!"})
   
})



module.exports={router} 