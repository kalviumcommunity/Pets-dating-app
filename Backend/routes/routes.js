
const express = require('express');
const { petsModel } = require('../model/pets.model');
const router= express.Router();


router.get("/getAllData", async(req,res)=>{
    try{
        let result =await petsModel.find()
        res.json({message:"successfully fetched the data", data:result})
    }catch(error){
        console.log(error)
        res.send({error})
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

module.exports={router} 