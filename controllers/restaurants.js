const restaurant = require("../models/restaurantsModels")

exports.getRestaurants = async (req, res) => {
    const QueryData = req.query
    const data = await restaurant.find(QueryData)
    res.json({ data })
}
exports.getfilteredRestaurant = async (req, res) => {
    const cityName = req.params.cityName
    await restaurant.find({ city: cityName }).then((result) => {
        res.json({ result })
    })
}
exports.getfilteredId = async (req, res) => {
    const id = req.params.id
    await restaurant.find({ location_id: id }).then((result) => {
        res.json({ result })
    })
}
exports.getfilteredLocality = async (req, res) => {
    const { locality } = req.query
    const queryObject = {}
    queryObject.locality = { $regex: locality, $options: "i" }
    const mydata = await restaurant.find(queryObject)
    res.json({ mydata })
}
exports.getResData = async (req, res) => {
    const queryData = req.query.restaurants
    const Resinfo = await restaurant.find({ _id: queryData })
    res.json({ Resinfo })
}
exports.restaurantfilter = async (req, res) => {
    const{lcost,hcost} = req.body
    const {sortOrder} = req.body
     await restaurant.find({min_price:{$gte:lcost,$lte:hcost}}).sort({min_price:sortOrder})
    .then((costfilter=>{
        res.json({costfilter})
    }))
    // const cost = req.body.cost
    // if ('Less than ₹500') {
    //     let ResN = await restaurant.find({ min_price:{$lte:500}})
    //     res.json({ ResN })
    // }
    // else if ('₹500 to 1000') {
    //     let ResN = await restaurant.find({ min_price:{$gte:500,$lte:1000} })
    //     res.json({ ResN })
    // }
    // else if ('₹1000 to 1500') {
    //     let ResN = await restaurant.find({ min_price:{$gte:1000,$lte:1500}})
    //     res.json({ ResN })
    // }
    // else if ('₹1500 to 2000') {
    //     let ResN = await restaurant.find({ min_price:{$gte:1500,$lte:2000}})
    //     res.json({ ResN })
    // }
    // else if ('₹2000+') {
    //     let ResN = await restaurant.find({ min_price:{$gte:2000}})
    //     res.json({ ResN })
    // }
    // else {
    //     let ResN = await restaurant.find({})
    //     res.json({ ResN })
    // }


    // if (NorthIndian) {
        // let ResN =  restaurant.find({ "cuisine.name": NorthIndian })
        //     res.json({ ResN })
    // }
    // else if (SouthIndian) {
    //     let ResN = await restaurant.find({ "cuisine.name": SouthIndian })
    //     res.json({ ResN })
    // }
    // else if (Chinese) {
    //     let ResN = await restaurant.find({ "cuisine.name": Chinese })
    //     res.json({ ResN })
    // }
    // else if (Fastfood) {
    //     let ResN = await restaurant.find({ "cuisine.name": Fastfood })
    //     res.json({ ResN })
    // }
    // else if (StreetFood) {
    //     let ResN = await restaurant.find({ "cuisine.name": StreetFood })
    //     res.json({ ResN })
    // }
    // else {
    //     let ResN = await restaurant.find({})
    //     res.json({ ResN })
    // }
}
