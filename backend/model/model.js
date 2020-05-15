const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Todo = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Todo',Todo)