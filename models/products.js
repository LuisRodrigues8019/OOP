const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({
    image: String,
    name: String,
    price: Number
});

const Product= mongoose.model('Product', ProductSchema);

module.exports = Product;