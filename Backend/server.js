const express = require('express');
const cors=require('cors')
const { connection } = require('./config/db');
const { petsModel } = require('./model/pets.model');
const data = require("./data.json");
const { router } = require('./routes/routes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('Pong!');
});


app.post('/postAllData',async (req,res)=>{
    try{
        await petsModel.insertMany(data)
    }catch(error){
        console.log(error)
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