const Referral = require('../models/referral')
const User = require('../models/User')
const Payment = require('../models/Payment')
const { StatusCodes } = require('http-status-codes');

const newreferral = async(req,res,)=>{
    const {referralLink, senderId, userId,_id} = req.body;
    const referral = await Referral.create({referralLink,senderId,userId,_id})
    res.status(StatusCodes.CREATED).json({success:true, referral})
}

const findreferral = async(req,res)=>{
    const {id:id} = req.params;
    const referral = await Referral.findById({_id:id})
    if(!referral){
        res.status(StatusCodes.NOT_FOUND).json('No referral found')
    }else{
        const user = await User.findById({_id:referral.userId})
        // var str = user._id.toString();
        // str = str.substring(0, str.length-4);
        // // const userId = user._id;
        // // const userpaid = userId.substring(0, userId.length - 4)
        const email = user.email
        const payment = await Payment.findOne({email})
        if(!payment){
            res.status(StatusCodes.NOT_FOUND).json("No payment made")
        }else{
            res.status(200).json({success:true, payment})
        }
    }
}

module.exports= {newreferral,findreferral}