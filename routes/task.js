const express = require('express')
const router = express.Router()

const taskController = require('../controllers/taskController')
const taskValidator = require('../controllers/TaskValidator')

//get
router.get('/',taskController.home)
router.get('/add',taskController.createTask)
router.get('/list',taskController.listTask)

//post
router.post('/add', taskValidator.addTaskValidator, taskController.addTaskProcess)

module.exports = router