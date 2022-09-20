const UserMessage = require('../models/UserMessage')

const newMessage = async(req,res)=>{
    const {email,phone,message} = req.body;
    const newmessage = await UserMessage.create({email,phone,message})
    res.status(200).json({success:true, newmessage})
}

const getMessages = async(req,res)=>{
    const messages = await UserMessage.find({});
    res.status(200).json({messages})
}

module.exports = {newMessage, getMessages}