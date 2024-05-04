const express = require('express');
const cors=require('cors')
const { connection } = require('./config/db');
const { petsModel } = require('./model/pets.model');
const data = require("./data.json");
const { router } = require('./routes/routes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const Joi = require('joi');

app.use(express.json());
app.use(cors());


const postSchema=Joi.object({
    image:Joi.string().required(),
      name:Joi.string().required() ,
      breed:Joi.string().required(),
      age:Joi.number().required() 
})




app.get('/ping', (req, res) => {
    res.send('Pong!');
});


app.post('/postAllData',async (req,res)=>{
    let payload = req.body;
    const {error,value}=postSchema.validate(payload);
    if (error){
        res.json({"msg":"validation failed"})
    }else{
        try{
            let result=await petsModel.create(payload)
            res.json({msg:"Posted the document and signup successfully"})
        }catch(error){
            res.json({msg:"something went wrong"})
        }
    }
   
});


app.use("/routes", router)


app.listen(PORT,async () => {
    try {
        await connection;
        console.log("connected to database")
    } catch (error) {
        console.log(error)

    }
    console.log(`Server is running on port ${PORT}`); 
});