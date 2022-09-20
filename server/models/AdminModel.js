const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const adminSchema = mongoose.Schema({
    email:{
     type:String,
     required:[true, 'Please provide email']
    },
    password:{
        type:String,
        required:[true, 'Please provide password'],
    },
    resetToken:{
        type:String, 
     },
     expireToken:{
        type:String,
    }

})

adminSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
     return isMatch
}

module.exports = mongoose.model('Admin', adminSchema)

