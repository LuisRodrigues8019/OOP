const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const dotenv = require ("dotenv");
const passport = require('passport');
  
const bodyParser = require('body-parser')
require("./config/passport")(passport)

dotenv.config();

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
console.log('server up runing');
console.log("Connected to db!");
});



//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
   }));

app.use(passport.initialize());
app.use(passport.session());
   //use flash
   app.use(flash());
   app.use((req,res,next)=> {
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error  = req.flash('error');
   next();
   })

//EJS Indique à Express que vous utiliserez ejs comme moteur de modèle
app.set('view engine','ejs'); 
app.use(expressEjsLayout);


//Routes
app.use('/',require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/newletters',require('./routes/newletters'));
app.use('/product',require('./routes/product'));
app.listen(process.env.PORT || 3000);
