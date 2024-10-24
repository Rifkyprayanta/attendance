const express = require('express');
const { 
    loginStudent,
} = require('../controllers/authController')

const router = express.Router();

router.post('/', loginStudent);

module.exports = router;