require('dotenv').config()
const express = require('express')
const router = require("./routes/routes")
const cors = require('cors');
const connectDB = require("./database/connect")
const app = express()
const port = process.env.PORT || 8080

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(router)



app.listen(port,()=>{
    console.log(`Server running on the port ${port}`);
})