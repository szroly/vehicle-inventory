const express = require('express')
const router = express.Router()
const insuranceController = require('../app/api/controllers/insurance')
const authMiddleware = require('../middleware/auth')


router.get('/', authMiddleware.authenticateToken, insuranceController.showInsurances)
router.post('/', authMiddleware.authenticateToken, insuranceController.create)
router.put('/:id', authMiddleware.authenticateToken, insuranceController.update)

module.exports = router