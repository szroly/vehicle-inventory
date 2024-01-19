const serviceModel = require('../models/service')

module.exports = {
    create: async (req, res) => {
        const { date, price, description } = req.body

        try {
            const service = await serviceModel.create({
                date,
                price,
                description
            })
            res.status(201).send(service)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    showServices: async (req, res) => {
        try {
            const services = await serviceModel.find({})
            res.status(200).send(services)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    showService: async (req, res) => {
        const { id: serviceId } = req.params

        try {
            let service = await serviceModel.findOne({ _id: serviceId })
            res.status(200).send(service)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    update: async (req, res) => {
        const { id: serviceId } = req.params
        const { date, price, description } = req.body

        try {
            const updatedService = await serviceModel.findByIdAndUpdate(
                { _id: serviceId },
                {
                    $set: {
                        date,
                        price,
                        description
                    }
                },
                { new: true }
            )
            res.status(200).send(updatedService)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    delete: async (req, res) => {
        const { id: serviceId } = req.params

        try {
            const deletedService = await serviceModel.findOneAndDelete({ _id: serviceId })
            if (deletedService) {
                res.status(200).send({ message: 'Service deleted successfully'})
            } else {
                res.status(404).send({ message: 'Service not found!'})
            }
        } catch (e) {
            console.log(e)
        }
    }
}