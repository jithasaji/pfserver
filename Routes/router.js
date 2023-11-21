//import express
const express = require('express')

//create Router object of express to define path
const router = new express.Router()

//import usercontroller
const userController = require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

//using router object define path
//register API
router.post('/user/register',userController.register)

//login
router.post('/user/login',userController.login)

//add projects
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

//getuserprojects
router.get('/user/all-projects',jwtMiddleware,projectController.allUserProjects)

//getallprojects
router.get('/project/all',jwtMiddleware,projectController.getallprojects)

//gethome projects
router.get('/project/home-projects',projectController.gethomeprojects)

//export router
module.exports = router