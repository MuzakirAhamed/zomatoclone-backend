const User = require('../models/userModels');
const user = require('../models/userModels')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
exports.signup = async (req, res, next) => {
    const newUser = await user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });
    const token = jwt.sign({ id: newUser.__id }, `my-good-password-is-here`, {
        expiresIn: `90`
    });
    res.status(201).json({
        status: "Success",
        token,
        data: newUser,
        message: "Sucessfully created account"
    })
}
exports.signin = async (req, res) => {
    const { email, password } = req.body
    const results = await user.findOne({ email: email })
   const isTrue = await bcrypt.compare(password,results.password)
   if(isTrue){
    res.send({message:"Login Successfully"});
   }else{
   res.send({message:"Invalid data"})
   }
}