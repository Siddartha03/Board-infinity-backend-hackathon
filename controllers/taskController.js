const Task = require('../models/Task')

//Home page
exports.home = (req, res) => {
    const data = {
        title: 'Home'
    }
    res.render('header', data)
}

//Create Task
exports.createTask = (req, res) => {
    const data = {
        title: 'Add Task',
        errors: req.session.errors
    }
    
    req.session.errors = {}
    
    res.render('addTask', data)
}

//Add Tasks
exports.addTaskProcess = (req, res) => {
    const {name, description, creator, duration, createdAt} = req.body
    
    const task = new Task()  // Task -> model
    task.name = name
    task.description = description
    task.creator = creator
    task.duration = duration
    task.createdAt = createdAt
    task.save()
        .then(() => {
            res.redirect('/list')
            //delete document after given duration
            new Promise((_, reject) => reject(
                task.createIndex({createdAt: task.createdAt},{expireAfterSeconds: duration*60})
            ))
            .catch(error => { console.log('caught error'); });
    })
        .catch(err => res.status(400).json(err))
}

//List Tasks
exports.listTask = (req, res) => {
    Task.find()
        .then(tasks => {
            const data = {
                title: 'List of Tasks',
                tasks
            }
            res.render('list', data)
        })
        .catch(err => {
            res.json(err)
        })
}