const connectDB = require("./database/connect")
const locationJSON = require("./JSON_Files/locations.json")
const mealTypeJSON = require("./JSON_Files/MealType.json")
const restaurantJSON = require("./JSON_Files/restaurents.json")

const location = require("./models/locationsModels")
const mealType = require("./models/mealTypeModels")
const restaurant = require("./models/restaurantsModels")

const locationsData = location.create(locationJSON)
const mealTypeData = mealType.create(mealTypeJSON)
const restaurantData = restaurant.create(restaurantJSON)