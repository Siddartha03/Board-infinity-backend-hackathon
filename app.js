const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const bodyParser = require('body-parser')

const taskRouter = require('./routes/task')

mongoose.connect(
    'mongodb+srv://dbfirst:P$siddu123@nodejs-tutorial-1q7og.mongodb.net/boardinfinity?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('DB Connected!')
)

const app = express()

const sess = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }
  
app.use(session(sess))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/', taskRouter)

module.exports = app