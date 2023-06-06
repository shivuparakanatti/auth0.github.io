const express = require('express')
const { validate, User } = require('../models/userModel')
const bcrypt = require('bcrypt')

exports.createUser=async (req,res)=>{
const {error} = validate(req.body)
if(error){
   return res.status(400).send({error : error.details[0].message})

}

const user = await User.findOne(({email : req.body.email}))
if(user){
   return res.status(409).send({message : "Email already exist"})
}

const salt = await bcrypt.genSalt(Number(10))
const hashPassword = await bcrypt.hash(req.body.password,salt)
await new User({...req.body, password : hashPassword}).save()
res.send({message : "user created succesfully"})

}