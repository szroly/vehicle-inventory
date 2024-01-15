const express = require('express')
const router = express.Router()
const vehiclesController = require('../app/api/controllers/vehicles')
const authMiddleware = require('../middleware/auth')

router.post('/create', authMiddleware.authenticateToken, vehiclesController.create)

module.exports = router