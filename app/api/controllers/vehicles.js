const vehiclesModel = require('../models/vehicles')

module.exports = {
    create: async (req,res) => {
        
        const { 
            manufacturer, 
            model, 
            production_year, 
            chassis_number, 
            registration_expires,
            registration_number,
            ccm,
            power
        } = req.body
       
        try {
            const vehicle = await vehiclesModel.create({
                manufacturer, 
                model, 
                production_year, 
                chassis_number, 
                registration_expires,
                registration_number,
                ccm,
                power 
            })
            res.status(201).send(vehicle)
        } catch(e) {
            console.log(e);
        }
    },

    showVehicles: async (req, res) => {
        try {
            const vehicles = await vehiclesModel.find({})
            res.status(200).send(vehicles)
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    showVehicle: async (req, res) => {
        const { id: vehicleId } = req.params
        try {
            const vehicle = await vehiclesModel.findOne({ _id: vehicleId })
            if (vehicle) {
                res.status(200).send(vehicle)
            } else {
                res.status(404).send({ message: 'Vehicle not found!' })
            }
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    },

    update: async (req, res) => {
        const {
            manufacturer,
            model,
            production_year,
            chassis_number,
            registration_expires,
            registration_number,
            ccm,
            power
        } = req.body

        try {
            const { id: vehicleId } = req.params
            const updatedVehicle = await vehiclesModel.findOneAndUpdate(
                { _id: vehicleId },
                {
                    $set: {
                        manufacturer,
                        model,
                        production_year,
                        chassis_number,
                        registration_expires,
                        registration_number,
                        ccm,
                        power
                    }
                },
                { new: true } // Return the modified document rather than the original
            )
    
            res.status(200).send(updatedVehicle)
        } catch (e) {
            console.log(e);
            res.status(500).send("Internal Server Error")
        }
    },

    delete: async (req,res) => {
        const { id: vehicleId } = req.params

        try {
            const deletedVehicle = await vehiclesModel.findOneAndDelete({ _id: vehicleId })
            if (deletedVehicle) {
                res.status(200).send({ message: 'vehicle deleted successfully!' })
            } else {
                res.stataus(404).send({ message: 'Vehicle not found!' })
            }
        } catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    }

}