const Promotion = require('../models/Promotion')
const Promotion2 = require('../models/Promotion2')
const { StatusCodes } = require('http-status-codes');

const createpromotion = async (req,res) =>{
    const {email,fullname,phone} = req.body
    const promo = await Promotion.create({email,phone,fullname})
    res.status(StatusCodes.CREATED).json({success:true, promo})
}
const updatepromotion = async(req,res)=>{
    const {id:promoId} = req.params
    const promo = await Promotion.findByIdAndUpdate({_id:promoId},req.body,{
     new:true,
     runValidators:true,
 })
    res.status(200).json({success:true, msg:'Promo updated'})
    if(!promo){
        throw new CustomAPIError('No user to update')
    }
}

const updatepromotion2 = async(req,res)=>{
    const {id:promoId} = req.params
    const promo = await Promotion2.findByIdAndUpdate({_id:promoId},req.body,{
     new:true,
     runValidators:true,
 })
    res.status(200).json({success:true, msg:'Promo updated'})
    if(!promo){
        throw new CustomAPIError('No user to update')
    }
}

const createpromotion2 = async (req,res) =>{
    const {email,fullname,phone} = req.body
    const promo = await Promotion2.create({email,phone,fullname})
    res.status(StatusCodes.CREATED).json({success:true, promo})
}


module.exports = {createpromotion,updatepromotion,updatepromotion2, createpromotion2}