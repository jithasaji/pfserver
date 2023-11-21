//import mangoose
const mongoose = require('mongoose')

//create schema for collection projects
const projectSchema = new mongoose.Schema({
    title :{
        type: String,
        required: true,
    },

    languages :{
        type: String,
        required: true,
    },

    overview :{
        type: String,
        required: true,
    },

    github:{
        type: String,
        required: true,

    },
    website:{
        type: String,
        required: true,

    },
    projectImage:{
        type: String,
        required: true,

    },
    userId:{
        type: String,
        required: true,

    }
})
//create  model according to schema
const projects = mongoose.model("projects",projectSchema)
//export 
module.exports = projects