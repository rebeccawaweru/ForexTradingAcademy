const Enroll = require('../models/Enroll');
const { StatusCodes } = require('http-status-codes');
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors');

const newEnroll = async(req,res)=>{
    const {email} = req.body;
    if(!email){
        throw new BadRequestError('Email is required')
    }
    const enroll = await Enroll.create({email});
    res.status(StatusCodes.CREATED).json({success:true, enroll});
}
const getEnroll = async(req,res)=>{
    const response = await Enroll.find({})
    if(!response){
      throw new BadRequestError('No email found')
    }
    res.status(200).json({response})
}
module.exports = {newEnroll,getEnroll};