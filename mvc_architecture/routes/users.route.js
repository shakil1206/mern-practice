const express = require('express');
const { saveUser, getUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/users', getUser)

router.post('/users', saveUser)


module.exports = router;