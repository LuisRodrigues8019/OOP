const mongoose = require('mongoose');
const validator = require('validator');
        const newsletter = new mongoose.Schema({
                mail:{
                        type  : String,
                        required : true   
                    } 
                       
        },{
            timestamps: true
        })

const News= mongoose.model('News', newsletter);
//exporte le nom du schema user
//Sur line 26, nous utilisons ce schéma dans votre Usermodèle. Tous vos utilisateurs auront les données dans ce format.
module.exports = News;
