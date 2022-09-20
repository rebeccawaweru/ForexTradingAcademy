const mongoose = require('mongoose');
const subscriptionSchema = mongoose.Schema({
    mode:{
        type:String,
    },
    mode2:{
        type:String,
    },
    mode3:{
        type:String,
    },
    mode4:{
        type:String,
    },
    email:{
        type:String,
    },
    whatsappnumber:{
        type:Number,
    },
    telegramnumber:{
        type:Number,
    },
    name:{
        type:String,
    },
    invoicenumber:{
        type:String, 
    }
})

module.exports = mongoose.model('Subscriptions', subscriptionSchema)