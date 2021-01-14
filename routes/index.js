const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require("../config/auth.js")

//Lorsque l'utilisateur navigue vers le root répertoire (effectue une GET requête), rend la index.ejs
router.get('/login', (req,res)=>{
   res.render('login');
})

//Lorsque l'utilisateur fait une GETdemande à la registerpage, restituer la page login.ejs
router.get('/register', (req,res)=>{
    res.render('register');
})

router.get('/', (req,res)=>{
    res.render('index');
})

router.get('/dashboard', ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
        });
    })


module.exports = router; 