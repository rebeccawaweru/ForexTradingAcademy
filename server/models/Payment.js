const mongoose = require('mongoose')
const paymentSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true, 'Please provide name value'],
    trim:true
  },
  phone:{
    type:Number,
    required:[true, 'Please provide phone number'],
    trim:true
  },
  transactioncode:{
    type:String,
  },
  email:{
    type:String,
    required:[true, 'Please provide email'],
  },
  amount:{
    type:Number,

  },
  invoicenumber:{
    type:String,
  },
  orderId:{
    type:String,
  },
 channel:{
    type:String,
  },
  status:{
    type:String
  },
  type:{
    type:String
  },
  currency:{
    type:String
  }

})
module.exports = mongoose.model('Payment', paymentSchema)

