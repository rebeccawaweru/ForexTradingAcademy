const mongoose = require('mongoose')

const uploadSchema = mongoose.Schema({
   title:{
        type:String,
    },
    price:{
        type:Number,
    },
    type:{
        type:String,  
    },
    avatar:{
        type:String,
      
    },
    description:{
        type:String
    },
    link:{
        type:String,
    }
})


module.exports = mongoose.model('Uploads', uploadSchema)

