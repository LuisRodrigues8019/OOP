const Product = require("../models/products")
const mongoose = require('mongoose')
const dotenv = require ("dotenv");
const express = require('express');
const router = express.Router();


// require('dotenv').config({
//     path: '../.env' 
// })


// mongoose.set("useFindAndModify", false);
// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
// console.log('server up runing');
// console.log("Connected to db!");
// });



const products = [
    new Product({
    imagePath:'images/img-pro-01.jpg',
    title: 'carrot',
    price: 10

}),
    new Product({
    imagePath:'images/img-pro-02.jpg',
    title: 'tomato',
    price: 10

}),
new Product({
    imagePath:'images/img-pro-03.jpg',
    title: 'grape',
    price: 10

})


];

//boucle pour sauver le modéle dans la data base
let done = 0;
for (let i= 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

module.exports = router;
