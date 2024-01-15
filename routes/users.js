const express = require('express');
const router = express.Router();
const { loginValidator } = require('../config/auth/validation');
const userController = require('../app/api/controllers/users');

router.post('/auth', loginValidator, userController.auth);

module.exports = router;
