const mongoose = require('mongoose')
require('dotenv')


const configDb = ()=>{
    mongoose.connect(process.env.DB)
    .then(()=>{
        console.log('connected to db')
    })
    
    .catch(err=>{
        console.log(err)
        
    })
}

module.exports=configDb