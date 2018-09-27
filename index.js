const express = require("express")
const bodyparser=require('body-parser')
const mongoose= require('mongoose')
// Set Expesss App

const app=express();
// connect to mongo db
mongoose.connect('mongodb://Admin:admin12@ds211083.mlab.com:11083/registration')
mongoose.Promise=global.Promise
app.use(bodyparser.json())
// using routes .js
app.use('/api',require('./routes/api'))
//Handle errors
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
}) 
// Listen for request 
app.listen(process.env.port||3000,function(){
    console.log("Listning")
})