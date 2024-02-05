const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FirstAidSchema = new Schema({
    manufacturer: {
        type: String,
        required: true
    },
    expire_date: {
        type: Date,
        required: true
    },
    damagaed: {
        type: Boolean
    }

})

module.exports = mongoose.model('FirstAid', FirstAidSchema)