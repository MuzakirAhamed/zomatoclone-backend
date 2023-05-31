const mongoose = require("mongoose")
const mealTypeSchema = mongoose.Schema({
    name:String,
    content:String,
    image:String,
    meal_Type:Number
})
const meal_Type = mongoose.model('meal_Type',mealTypeSchema)
module.exports = meal_Type