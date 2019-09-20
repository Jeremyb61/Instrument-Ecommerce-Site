const express = require('express');
const router = express.Router();

router.use('/api/departments', require('./department.route.js'));
router.use('/api/products/', require('./products.route.js'));

module.exports = router; 