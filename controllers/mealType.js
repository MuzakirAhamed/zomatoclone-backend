const mealType = require("../models/mealTypeModels")

exports.getMealTypes = async(req, res) => {
    const page = req.query.page*1 || 1
    const limit = req.query.limit*1
    const skip = (page-1)*limit
    const data = await mealType.find({}).skip(skip).limit(limit)
    res.json({data})
}
