const express = require('express')
const router = express.Router()
const vehiclesController = require('../app/api/controllers/vehicles')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware.authenticateToken, vehiclesController.showVehicles)
router.get('/:id', authMiddleware.authenticateToken, vehiclesController.showVehicle)
router.post('/create', authMiddleware.authenticateToken, vehiclesController.create)
router.put('/:id', authMiddleware.authenticateToken, vehiclesController.update)
router.delete('/:id', authMiddleware.authenticateToken, vehiclesController.delete)

module.exports = router