require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5010
const cors = require("cors")
const configDb = require('./config/db')
const router = require('../Backend/config/routes')

app.use(express.json())
app.use(cors())
app.use(router)

configDb()

app.listen(port,()=>{
    console.log('app is listening on',port)
})