const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    course:{
        type:String,
        trim:true
    },
   topic:{
        type:String,   
        trim:true 
    },
    file:{
        type:String,
    }
})


module.exports = mongoose.model('Courses', courseSchema)
