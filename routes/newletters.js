const express = require('express');
const router = express.Router();
const News = require("../models/newsletter");

//newsletter
router.post('/addemail', (req,res)=>{
    console.log(req.body)
    let newNote = new News({
    mail : req.body.Email
})

newNote.save()
res.redirect('/')
})

module.exports  = router;
