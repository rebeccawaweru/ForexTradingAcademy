const mongoose = require('mongoose');
const enrollSchema = mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true,
    }
})

module.exports = mongoose.model('Enroll', enrollSchema)
