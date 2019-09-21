const express = require('express');
const router = express.Router();
const Product = require('../models').products;
const ProductImage = require('../models').productimages;

router.get('/:departmentId', (req,res,next) => {
    
    Product.findAll({
        where: {
            departmentId: req.params.departmentId
        },
        include: [{
            model: ProductImage
        }]
    }).then((products) => {
        res.json(products);
    }).catch((err) => {
        res.json({
            msg: 'Something Happened',
            err
        });
    })
});

module.exports = router;