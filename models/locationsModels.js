const mongoose = require("mongoose")
const LocationJSON = require('../JSON_Files/locations.json')
const LoctionSchema = new mongoose.Schema({
    name: String,
    city_id: Number,
    location_id: Number,
    city:String,
    country_name:String
})
const location = mongoose.model('location',LoctionSchema)
module.exports = location