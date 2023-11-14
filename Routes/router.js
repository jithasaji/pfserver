//import express
const express = require('express')

//create Router object of express to define path
const router = new express.Router()

//import usercontroller
const userController = require('../Controllers/userController')

//using router object define path
//register API
router.post('/user/register',userController.register)

//export router
module.exports = router