const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require("../config/auth.js")
const Product = require("../models/products")


//Lorsque l'utilisateur navigue vers le root répertoire (effectue une GET requête), rend la index.ejs
router.get('/login', (req,res)=>{
   res.render('login');
})

// router.get('/', (req,res)=>{
//     res.render('index');
//  })

//Lorsque l'utilisateur fait une GETdemande à la registerpage, restituer la page login.ejs
router.get('/register', (req,res)=>{
    res.render('register');
})
//permet de conser les donnees utilisateur grace a user.req.user
router.get('/',(req,res)=>{
    res.render('index',{
       user: req.user
        });
 })

 router.get('/about',(req,res)=>{
    res.render('about',{
       user: req.user
        });
 })

 router.get('/my-account',(req,res)=>{
    res.render('my-account',{
       user: req.user
        });
 })

 router.get('/contact-us',(req,res)=>{
    res.render('contact-us',{
       user: req.user
        });
 })

 router.get('/shop-detail',(req,res)=>{
    res.render('shop-detail',{
       user: req.user
        });
 })

 router.get('/shop',(req,res)=>{
    Product.find(function(err, docs){
       let productChunks = []
       let chunkSize = 3;
       for (let i = 0; i < docs.length; i += chunkSize){
          productChunks.push(docs.slice(i, i + chunkSize));
       }
      res.render('shop',{
         user: req.user,
         products: productChunks
    });
    
        });
 });

 router.get('/gallery',(req,res)=>{
    res.render('gallery',{
       user: req.user
        });
 })

 router.get('/wishlist',(req,res)=>{
    res.render('wishlist',{
       user: req.user
        });
 })

 router.get('/cart',(req,res)=>{
   res.render('cart',{
      user: req.user
       });
})

router.get('/checkout',(req,res)=>{
   res.render('checkout',{
      user: req.user
       });
})


router.get('/dashboard', ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
        });
    })


module.exports = router; 