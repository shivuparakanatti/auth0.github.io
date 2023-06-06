const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const userModel = mongoose.Schema({
    firstName : {
        type : String,
        required : true

    },
    lastName : {
        type : String,
        required : true

    },
    email : {
        type : String,
        required : true

    },
    password : {
        type : String,
        required : true

    }
})

userModel.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id},process.env.JWTSECRETKEY)
    return token

}

const User = mongoose.model("user",userModel)

const validate=(data)=>{
const Schema = joi.object({
    firstName : joi.string().required().label('First Name'),
    lastName : joi.string().required().label('Last Name'),
    email : joi.string().email().required().label('Email'),
    password : passwordComplexity().required().label('Password'),
})

return Schema.validate(data)
}

module.exports = {User,validate}