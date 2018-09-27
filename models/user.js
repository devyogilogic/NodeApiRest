const mongoose= require('mongoose')
const Schema=mongoose.Schema
const UserSchema= new Schema({
    username:{
        type:String,
        required:[true,'Username is required']
    },
    emailid:{
        type:String,
        required:[true,'Email id is reqired']
    },
    password:{
        type:String,
        required:[true,'Password is  required ']
    }

})//this is how our user look like

const User=mongoose.model('User',UserSchema) // Collection name in Mongo db and selecting schema for collection
module.exports=User // Used to export the model 