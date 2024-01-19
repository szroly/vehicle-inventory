const express = require('express')
const router = express.Router()

const serviceController = require('../app/api/controllers/service')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware.authenticateToken, serviceController.showServices)
router.get('/:id', authMiddleware.authenticateToken, serviceController.showService)
router.post('/', authMiddleware.authenticateToken, serviceController.create)
router.put('/:id', authMiddleware.authenticateToken, serviceController.update)
router.delete('/:id', authMiddleware.authenticateToken, serviceController.delete)

module.exports = router