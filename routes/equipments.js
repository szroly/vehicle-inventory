const express = require('express')

const router = express.Router()

const equipmentsController = require('../app/api/controllers/equipments')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware.authenticateToken, equipmentsController.showEquipments)
router.post('/', authMiddleware.authenticateToken, equipmentsController.create)
router.put('/:id', authMiddleware.authenticateToken, equipmentsController.update)
router.delete('/:id', authMiddleware.authenticateToken, equipmentsController.delete)

module.exports = router