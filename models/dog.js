const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
    dog_color:(String),
    dog_breed:(String) ,
    dog_price:(Number)
})
module.exports = mongoose.model("dog",dogSchema)