const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ServiceSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    price: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Service', ServiceSchema)