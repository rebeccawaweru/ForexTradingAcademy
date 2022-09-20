const mongoose = require("mongoose")

const referralSchema = mongoose.Schema({
    referralLink:{
        type:String
    },
    senderId:{
        type:String
    },
    userId:{
        type:String
    },
    _id:{
        type:String
    }
})

module.exports = mongoose.model("Referral", referralSchema)
