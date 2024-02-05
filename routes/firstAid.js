const express = require('express')
const router = express.Router()

const firstAidController = require('../app/api/controllers/firstAid')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware.authenticateToken, firstAidController.showFirstAids)
router.get('/:id', authMiddleware.authenticateToken, firstAidController.showFirstAid)
router.post('/create', authMiddleware.authenticateToken, firstAidController.create)
router.delete('/:id', authMiddleware.authenticateToken, firstAidController.delete)
router.put('/:id', authMiddleware.authenticateToken, firstAidController.update)

module.exports = router