
const express = require('express');
const router = express.Router();
const Product = require("../models/products")

router.post('/addProducts', (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    });
    product.save()
})

module.exports = router;
