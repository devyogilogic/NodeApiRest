const express = require("express")
const router= express.Router(); // Routes Handler
//get all the user details
const User =require('../models/user')//Exporting Model
router.get("/details",function(req,res,next){
    User.find().then(function(user){
        console.log(user)
res.send(user)
    })

})
// Add user into mongo
router.post("/details",function(req,res,next){
  // var user= new user(req.body);
   //user.save();
   User.create(req.body).then(function(user){
       res.send(user)
   }).catch(next)
 
    })
    // Update user details
router.put('/details/:id',function(req,res,next){
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        User.findOne({_id:req.params.id}).then(function(user){
            res.send(user)
        })
    })

 })
        // Delete User
     router.delete('/details/:id',function(req,res,next){
        User.findByIdAndRemove({_id:req.params.id}).then(function(user){
            res.send(user)
        })
        
         })
         module.exports=router;