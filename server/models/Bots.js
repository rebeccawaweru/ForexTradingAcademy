const mongoose = require('mongoose');
const botSchema = mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true,
    },
    phone:{
        type:Number,
        trim:true,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    capital:{
        type:Number,
        trim:true,
        required:true,  
    },
    tradingcapital:{
        type:Number,
        trim:true,
        required:true,  
    },
    riskappetite:{
        type:String,
        trim:true,
        required:true,  
    },
    expectedreturn:{
        type:String,
        trim:true,
        required:true, 
    }
})

module.exports = mongoose.model('Bot', botSchema)
