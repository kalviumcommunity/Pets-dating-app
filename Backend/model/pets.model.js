const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
  
})

const petsModel = mongoose.model("pets" , petSchema)

module.exports = {petsModel}