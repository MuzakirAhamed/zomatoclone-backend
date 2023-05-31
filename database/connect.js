const mongoose = require("mongoose")
const mongoUri = process.env.DATABASE
const connectdb = mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("MongoDB Connected "+ mongoUri);
}).catch(()=>{
    console.log("Error");
})
module.exports = connectdb