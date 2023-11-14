//import mangoose
const mongoose = require('mongoose')
//import validator
const validator = require('validator')

//create schema for collection users
const userSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true,
        min:[3,'Must be at least 3,got {VALUE}']
    },

    email :{
        type: String,
        required: true,
        unique:true,
        validator(value){
            if(!validation.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },

    password :{
        type: String,
        required: true,
    },

    github:{
        type: String,
    },
    linkedin:{
        type: String,
    },
    profile:{
        type: String,
    }

})
//create  model according to schema
const users = mongoose.model("users",userSchema)
//export 
module.exports = users