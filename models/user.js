const mongoose = require('mongoose');

        const UserSchema = new mongoose.Schema({
                name:{
                        type  : String,
                        required : true
                    } ,
                   
                    email :{
                      type  : String,
                      required : true
                  } ,
                  password :{
                      type  : String,
                      required : true
                  }
        },{
            timestamps: true
        })

const User= mongoose.model('User', UserSchema);
//exporte le nom du schema user
//Sur line 26, nous utilisons ce schéma dans votre Usermodèle. Tous vos utilisateurs auront les données dans ce format.
module.exports = User;

//1 require le module mongoose
//2 cree une variable user ou on stocke un objet avec les donnee du user et dans cette variable on cree un schema pour mongoose
//3 cree une variable pour stocker le model mongoose que on le nomme est on stocke la variable user
//4 exporte la derniere variable qui contient mongoose.model