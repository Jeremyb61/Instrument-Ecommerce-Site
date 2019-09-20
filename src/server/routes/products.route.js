const express = require('express');
const router = express.Router();
const Product = require('../models').products;

module.exports = router.get('/:departmentId', (req,res,next) => {
    
    Product.findAll({
        where: {
            departmentId: req.params.departmentId
        }
    }).then((products) => {
        res.json(products);
    }).catch((err) => {
        res.json({
            msg: 'Something Happened',
            err
        });
    })
});

