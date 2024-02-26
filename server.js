const express = require('express');
const connection = require('./Config/db');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PUBLIC_PORT || 3000;


app.get('/ping', (req, res) => {
    res.send('Pong!');
});



app.listen(PORT, async() => {
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }

    console.log(`Server is running on port ${PORT}`); 
});
