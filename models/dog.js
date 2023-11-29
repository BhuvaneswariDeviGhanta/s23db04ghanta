const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
    dog_color:(String),
    dog_breed: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
      },
    dog_price: {
        type: Number,
        required: true,
        min: 4,
        max: 444444
      },
})
module.exports = mongoose.model("dog",dogSchema)