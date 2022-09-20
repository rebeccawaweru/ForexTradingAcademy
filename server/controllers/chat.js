const { StatusCodes } = require('http-status-codes');
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors');
const Message = require('../models/Message');
const AdminMessage = require('../models/AdminMessage')

const getChats = async(req,res)=>{
  const messages = await Message.find({});
  res.status(200).json({success:true, messages})
}

const addAdminMessage = async(req,res)=>{
  const {sentMessage,userName,userId} = req.body;
 const adminmessage = await AdminMessage.create({sentMessage,userName,userId})
 res.status(StatusCodes.CREATED).json({success:true, adminmessage}) 
}
const getAdminMessages = async (req, res) => {
  const {id:userId} = req.params;
  const messages = await AdminMessage.find({userId:userId});
  res.status(200).json({success:true, messages})
};

const getMessages = async (req, res) => {
  const {id:userId} = req.params;
  const messages = await Message.find({userId:userId});
  res.status(200).json({success:true, messages})
};

const addMessage = async (req, res) => {
 const {sentMessage,userName,userId} = req.body;
 const usermessage = await Message.create({sentMessage,userName,userId})
 res.status(StatusCodes.CREATED).json({success:true, usermessage})
};
  

module.exports = {getChats,getMessages,addMessage,addAdminMessage,getAdminMessages}