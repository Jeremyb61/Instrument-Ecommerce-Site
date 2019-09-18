const express = require('express');
const router = express.Router();

router.use('/api/departments', require('./department.route.js'))

module.exports = router; 