const insuranceModel = require('../models/insurance')

module.exports = {
    create: async (req, res) => {
        const { expire_date } = req.body

        try {
            const insurance = await insuranceModel.create({
                expire_date
            })
            res.status(201).send(insurance)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    showInsurances: async (req, res) => {
        try {
            const insurances = await insuranceModel.find({})
            res.status(201).send(insurances)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    update: async (req, res) => {
        const { expire_date } = req.body
        const { id: insuranceId } = req.params

        try {
            const updatedInsurance = await insuranceModel.findOneAndUpdate(
                { _id: insuranceId },
                {
                    $set: {
                        expire_date
                    }
                },
                { new: true }
            )
            res.status(200).send(updatedInsurance)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    }
}