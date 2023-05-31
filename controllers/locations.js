const location = require("../models/locationsModels")

exports.getLocations = async(req, res) => {
    const queryObject = req.query.sort
    const data = await location.find({}).sort(queryObject)
    res.json({data})
}


