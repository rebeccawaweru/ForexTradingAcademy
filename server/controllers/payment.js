require('dotenv').config()
const Payment = require('../models/Payment')
const { StatusCodes } = require('http-status-codes');
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors');
const axios = require('axios')

const passkey = process.env.PASSKEY;
const shortcode = process.env.SHORTCODE;
const consumerkey = process.env.CONSUMERKEY;
const consumersecret = process.env.CONSUMERSECRET;

const newPayment = async(req,res)=>{
    const {name,phone,transactioncode,email,amount,invoicenumber,orderId,channel,type,currency} = req.body;
    const payment = await Payment.create({name,type,phone,transactioncode,email,amount,invoicenumber,orderId,channel,currency});
    res.status(200).json({success:true, payment})
}
const getPayments = async (req,res) =>{
    const payment = await Payment.find({});
    res.status(200).json({payment})
}

const getPay= async (req,res) =>{
    const {id:paymentId} = req.params;
    const payment = await Payment.findById({_id:paymentId});
    if(!payment){
        throw new NotFoundError('Payment does not exist')
    }
    res.status(200).json({payment})
}

const getUser = async(req,res)=>{
     const {email} = req.body;
     const user = await Payment.find({email:email});
     if(!user){
        throw new NotFoundError('No payment made by user')
     }
     res.status(200).json({success:true, user})
}

const getType = async(req,res)=>{
    const {type} = req.body;
    const pays = await Payment.find({type:type});
    if(!pays){
        throw new NotFoundError('No payment made by user')
     }
     res.status(200).json({pays})
}
const getOrderId = async(req,res)=>{
    const {order} = req.body;
    const pays = await Payment.find({orderId:order});
    if(!pays){
        throw new NotFoundError('No payment made by user')
     }
     res.status(200).json({pays})
}



const token = (req,res,next)=>{
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    const auth = 'Basic ' + Buffer.from(consumerkey + ':' + consumersecret).toString('base64');
    const headers = {
        Authorization: auth,
    }
    axios.get(
    url,{
        headers:headers
    }).then(response=>{
        let data = response.data;
        let access_token = data.access_token;
        req.token = access_token
        // console.log(response.data);
        return next()
    }).catch(error=>console.log(error))
}

const stkPush = (req,res)=>{
    const token = req.token
    const headers = {
        Authorization:'Bearer ' + token
    }
    const stkURL = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    let data = {
        BusinessShortCode:"174379",    
        Password:"MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",  
        Timestamp:"20160216165627",    
        TransactionType: "CustomerPayBillOnline",    
        Amount:"1",    
        PartyA:"254702742458",    
        PartyB:"174379",    
        PhoneNumber:"254702742458",    
        CallBackURL:"https://forexarena.herokuapp.com/forexarena/stk/response",    
        AccountReference:"Forex Arena",    
        TransactionDesc:"lipa na Mpesa"    
        }
        axios.post(stkURL, data, { headers: headers}).then(response=>res.send(response.data));
    }

    const mpesaMessage = async (req,res)=>{
        try {
        const response = await axios.post("https://forexarena.herokuapp.com/forexarena/stk/response");
        res.status(200).json({response})  
    
        } catch (error) {
          console.log(error.message)  
        }
    }








module.exports = {newPayment,getOrderId,getType,mpesaMessage,token,stkPush,getPay,getPayments,getUser};