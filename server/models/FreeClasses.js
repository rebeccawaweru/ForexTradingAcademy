const mongoose = require('mongoose')
const freeClassSchema = mongoose.Schema({
  firstname:{
        type:String,
        trim:true,
        required:[true, 'name is required'],
        unique:false
    },
   lastname:{
        type:String,
        trim:true,
        required:[true, 'name is required'],
        unique:false
    },
    phonenumber:{
        type:Number,
        required:[true, 'phonenumber is required'],
        unique:false

    },
    email:{
        type: String,
        required:[true, 'Please provide your email'],
        unique:false
    },
    country:{
        type:String,
        required:[true, 'Please provide country'],
        unique:false
    },
   city:{
        type:String,
        required:[true, 'Please provide country'],
        unique:false
    },
   mode:{
       type:String, 
       unique:false
 
    },
morning:{
        type:String,
        unique:false
    },
  afternoon:{
        type:String,
        unique:false
    },
    evening:{
        type:String,
        unique:false
    },
 
})

module.exports = mongoose.model('FreeClass', freeClassSchema)

