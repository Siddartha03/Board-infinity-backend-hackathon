const { Mongoose } = require("mongoose")

const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    creator: { type: String },
    duration: { type: Number },
    createdAt: {type: Date, default: Date.now()}
})

const Tasks = mongoose.model('Task', TaskSchema)

module.exports = Tasks