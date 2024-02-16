const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.send('Pong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    try {
        console.log(`Server is running on port ${PORT}`); 
    } catch (error) {
        console.log(error)
    }
});
