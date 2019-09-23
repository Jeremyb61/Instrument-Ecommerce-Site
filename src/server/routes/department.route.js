const express = require('express');
const router = express.Router();
const Departments = require('../models').departments;

router.get('/', (req,res,next) => {
    Departments.findAll().then((dept) => {
        res.json(dept);
    });
});
router.get('/:id', (req,res,next) => {
    Departments.findOne({
        where: {
            id:req.params.id
        }
    }).then((dept) => {
        res.json(dept);
    });
});


module.exports = router;
