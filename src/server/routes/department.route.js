const express = require('express');
const router = express.Router();
const Departments = require('../models').Departments;

router.get('/', (req,res,next) => {
    Departments.findAll().then((dept) => {
        res.json(dept);
    });
});


module.exports = router;
