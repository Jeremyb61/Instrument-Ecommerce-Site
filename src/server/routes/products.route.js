const express = require('express');
const router = express.Router();
const Department = require('../models').departments;
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

router.post('/add', async (req,res,next) => {
    await Department.findOne({
        where: {
            name: req.body.dept
        }
    }).then(async(department) => {
        await Product.create({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            price: req.body.price,
            departmentId: department.id,
        }).then(async (product) => {
            for(let i = 0; i < req.body.images.length; i++) {
                ProductImage.create({
                    path: req.body.images[i],
                    productId: product.id
               })       
            }
            res.json({
                product
            })
        })
    })
    console.log(req.body);
})

router.get('/one/:itemId', async (req,res,next) => {
    Product.findOne({
        where: {
            id: req.params.itemId
        },
        include:[{
            model:ProductImage
        }]
    }).then((product) => {
        res.json({
            product
        })
    })
})

module.exports = router;