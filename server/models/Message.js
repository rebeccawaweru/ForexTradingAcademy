const mongoose = require("mongoose");

const UserMessageSchema = mongoose.Schema({
 sentMessage:{
 type:String,
    trim:true,
    required:true,
   },
   userName:{
   type:String,
   trim:true,
   required:true,
  },
  userId:{
    type:String,
    trim:true,
    required:true
  }

});

module.exports = mongoose.model("Messages", UserMessageSchema);