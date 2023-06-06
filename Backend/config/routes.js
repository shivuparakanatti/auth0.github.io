const express = require('express')
const { createUser } = require('../app/controllers/createUser')
const authUser= require('../app/controllers/authUser')
const router = express.Router()

router.post('/api/create', createUser)
router.post('/api/login', authUser)


module.exports = router