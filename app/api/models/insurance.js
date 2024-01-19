const mongoose = require('mongoose')


const Schema = mongoose.Schema

const InsuranceSchema = new Schema({
    expire_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Insurance', InsuranceSchema)