const Bot = require('../models/Bots');

const newBot = async(req,res)=>{
    const {email,phone,name,capital,tradingcapital,riskappetite,expectedreturn} = req.body;
    const bot = await Bot.create({email,phone,name,capital,tradingcapital,riskappetite,expectedreturn})
    if(!bot){
        res.status(500).json("Error")
    }
    res.status(200).json({success:true, bot})
}

const getBot = async(req,res)=>{
    const bot = await Bot.find({})
    if(!bot){
        res.status(500).json("Error")
    }
    res.status(200).json({success:true, bot})
}

module.exports = {newBot,getBot}