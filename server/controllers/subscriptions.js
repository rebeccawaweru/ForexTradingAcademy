const Subscriptions = require('../models/Subscriptions');

const newSubscription = async(req,res)=>{
    const {mode,mode2,mode3,mode4,email,whatsappnumber,telegramnumber,name,invoicenumber} = req.body;
    const subscription = await Subscriptions.create({mode,mode2,mode3,mode4,email,whatsappnumber,telegramnumber,name,invoicenumber})
    if(!subscription ){
        res.status(500).json("Error")
    }
    res.status(200).json({success:true, subscription})
}

const getSubscriptions = async(req,res)=>{
    const subscriptions = await Subscriptions.find({})
    if(!subscriptions){
        res.status(500).json("Error")
    }
    res.status(200).json({success:true, subscriptions})
}

module.exports = {newSubscription, getSubscriptions}