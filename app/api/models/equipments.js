const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EquipmentsSchema = new Schema({
  description: {
    type: String,
    required: true

  }
})

module.exports = mongoose.model('Equipments', EquipmentsSchema)