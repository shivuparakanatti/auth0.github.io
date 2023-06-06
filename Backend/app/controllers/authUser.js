const joi = require('joi')
const { User } = require('../models/userModel')
const bcrypt = require('bcrypt')

const authUser = async (req,res)=>{

    try {
        const validate=(data)=>{
            const Schema = joi.object({
                email : joi.string().email().required().label('Email'),
                password : joi.string().required().label('Password')
            })
            return Schema.validate(data)
        }
        
            const {error} = validate(req.body)
            if(error){
               return res.status(400).send({error : error.details[0].message})
            }
    
            const user = await User.findOne({email : req.body.email})
            if(!user){
               return res.send({message : "Account doesn't exist"})
            }
    
            const validatePassword = await bcrypt.compare(req.body.password,user.password)
    
            if(!validatePassword){
                res.send({message : "email/password is invalid"})
            }
    
            const token=user.generateAuthToken()
            res.send({data:token,message : 'Logged in succesfully',users:user})

        
    } catch (error) {
        console.log(error)
        
    }



   
        
    

    
}

module.exports = authUser