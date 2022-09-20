const mongoose = require('mongoose')

const promotion2Schema = mongoose.Schema({
   fullname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
    },
    twitter:{
        type:String,
        default:"",
        trim:true
    },
    facebook:{
        type:String,
        default:"",
        trim:true
    }, 
    instagram:{
        type:String,
        default:"",
        trim:true
    }
})

module.exports = mongoose.model('Promotion2', promotion2Schema)