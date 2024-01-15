const mongoose = require('mongoose')


const Schema = mongoose.Schema

const VehiclesSchema = new Schema({
    manufacturer: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    production_year: {
        type: String
    },
    chassis_number: {
        type: Number
    },
    registration_number: {
        type: Number
    },
    ccm: {
        type: Number
    },
    power: {
        type: Number
    },
    registration_expires: {
        type: Date
    }
})

module.exports = mongoose.model('Vehicles', VehiclesSchema)