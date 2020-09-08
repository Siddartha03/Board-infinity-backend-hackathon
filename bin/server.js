require('dotenv').config()
const http = require('http')
const app = require('../app')
const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, (err)=> {
    if(!err) return console.log("Serevr started at localhost:",PORT)
    console.log("Server not started | Error occured!")
})