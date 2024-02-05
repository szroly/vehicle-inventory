const equipmentsModel = require('../models/equipments')

module.exports = {
  create: async (req, res) => {
    const { description } = req.body

    try {
      const equipments = await equipmentsModel.create({
        description
      })
      res.status(201).send(equipments)
    } catch (e) {
      console.log(e)
      res.status(500).send("Internal Server Error")
    }
  },

  showEquipments: async (req, res) => {
    try {
      const equipments = await equipmentsModel.find({})
      res.status(201).send(equipments)
    } catch (e) {
      console.log(e)
      res.status(500).send("Internal Server Error")
    }
  },

  update: async (req, res) => {
    const { id: equipmentId } = req.params
    const { description } = req.body

    try {
      const updatedEquipment = await equipmentsModel.findOneAndUpdate(
        { _id: equipmentId },
        {
          $set: {
            description
          }
        },
        { new: true }
      )
      res.status(200).send(updatedEquipment)
    } catch (e) {
      console.log(e)
      res.status(500).send("Internal Server Error")
    }
  },

  delete: async (req, res) => {
    const { id: equipmentId } = req.params

    try {
      const deletedEquipments = await equipmentsModel.findOneAndDelete({ _id: equipmentId })
      if (deletedEquipments) {
        res.status(200).send({ message: 'Equipments deleted successfully'})
      } else {
        res.status(404).send({ message: 'Equipments not found! '})
      }
    } catch (e) {
      console.log(e)
      res.status(500).send("Internal Server Error")
    }
  }
}