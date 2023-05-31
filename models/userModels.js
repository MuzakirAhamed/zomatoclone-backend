const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require("bcryptjs")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, "Please provide a valid email ID"]
    },
    photo: {
        type: String,
    },
    password: {
        type: String,
        required:[true,'Enter a valid password'],
        minlength:8
    },
    passwordConfirm:{
        type:String,
        required:[true,'Please confirm your password'],
        validate:{
          validator:function(el){
            return el===this.password
        },
        message:"Passwords not matched"
    }
    }
})
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password,10)
    this.passwordConfirm = undefined
    next()
})

 const User = mongoose.model('User',userSchema)
 module.exports=User