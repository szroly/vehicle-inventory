const firstAidModel = require('../models/first_aid')

module.exports = {
    create: async (req, res) => {
        const { manufacturer, expire_date, demaged } = req.body

        try {
            const firstAid = await firstAidModel.create({
                manufacturer,
                expire_date,
                demaged
            })
            res.status(201).send(firstAid)
        } catch (e) {
            console.log(e)
        }
    },

    showFirstAids: async (req, res) => {
        try {
            const firstAids = await firstAidModel.find({})
            res.status(200).send(firstAids)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    showFirstAid: async (req, res) => {
        const { id: firstAidId } = req.params

        try {
            const firstAid = await firstAidModel.findOne({ _id: firstAidId })
            res.status(200).send(firstAid)
        } catch (e) {
            console.log(e)
            res.status(500).send({ message: "Internal Server Error" })
        }
    },

    update: async (req, res) => {
        const { manufacturer, expire_date, damaged } = req.body
        const { id: firstAidId } = req.params
        
        try {
            const updatedFirstAid = await firstAidModel.findOneAndUpdate(
                { _id: firstAidId},
                {
                    $set: {
                        manufacturer,
                        expire_date,
                        damaged
                    }
    
                    
                },
                { new: true}
            )
            res.status(200).send(updatedFirstAid)
        } catch (e) {
            console.log(e)
            res.status(500).send({ message: "Internal server error"})
        }
    },

    delete: async (req, res) => {
        const { id: firstAidId } = req.params

        try {
            const deletedFirstAid = await firstAidModel.findOneAndDelete(
                {
                    _id: firstAidId
                }
            )
            if (deletedFirstAid) {
                res.status(200).send({ message: 'first aid deleted successfully!'})
            } else {
                res.status(404).send({ message: "First aid not found!"})
            }
        } catch (e) {
            console.log(e)
            res.status(500).send({ message: "Internal server error"})

        }
    }
    
}