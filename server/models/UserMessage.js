const mongoose = require("mongoose");

const UserMessageSchema = mongoose.Schema({
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
 message:{
    type:String,
    trim:true,
    required:true
  }

});

module.exports = mongoose.model("UserMessages", UserMessageSchema);