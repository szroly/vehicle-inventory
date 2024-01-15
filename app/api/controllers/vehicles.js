const vehiclesModel = require('../models/vehicles')

module.exports = {
    create: async (req,res) => {
        console.log("req", req.body);
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
        console.log({manufacturer})
        console.log({ccm});
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
    }
}