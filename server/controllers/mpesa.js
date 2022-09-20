require('dotenv').config();
const User = require('../models/User')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const nodemailer = require('nodemailer')
const prettyjson = require('prettyjson')
const sendgridTransport = require('nodemailer-sendgrid-transport');
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors')
const { StatusCodes } = require('http-status-codes');
const cloudinary  = require('../helpers/imageUpload');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.SENDGRID_API_KEY
    }
}))

const datetime = require('node-datetime');
const passkey = process.env.PASSKEY;
const shortcode = process.env.SHORTCODE;
const consumerkey = process.env.CONSUMERKEY;
const consumersecret = process.env.CONSUMERSECRET;

const newPassword = ()=>{
    const dt = datetime.create()
    const formatted = dt.format('YmdHMS');
    const passString = shortcode + passkey + formatted;
    const base64EncodedPassword = Buffer.from(passString).toString('base64');
    return base64EncodedPassword
}

const dt = datetime.create()
const formatted = dt.format('YmdHMS');

const payment = async(req,res)=>{
    res.status(200).json(newPassword())
   
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
    CallBackURL:"https://maricredit.herokuapp.com/maricredit/auth/stk/response",    
    AccountReference:"MariCredit",    
    TransactionDesc:"lipa na Mpesa"    
    }
    axios.post(stkURL, data, { headers: headers}).then(response=>res.send(response.data));
}

const mpesaMessage = async (req,res)=>{
    try {
    const response = await axios.post("https://maricredit.herokuapp.com/maricredit/auth/stk/response");
    res.status(200).json({response})  

    } catch (error) {
      console.log(error.message)  
    }
}

const loading = async(req,res)=>{
    res.status(200).json('Connected to server')
}
const signup = async (req,res) =>{
    const {email,password,fullname,phonenumber} = req.body
    if(!email || !password || !fullname ||!phonenumber){
        throw new BadRequestError('Please provide the required credentials')
        
    }
    const finduser = await User.findOne({email})
    const findphone = await User.findOne({phonenumber})
    if(finduser){
        throw new UnauthenticatedError
        ('User Already Exists')
    }else if(findphone){
        throw new UnauthenticatedError
        ('User Already Exists')
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt)
    const user = await User.create({email,phonenumber,fullname,password:hashedpassword})
    res.status(StatusCodes.CREATED).json({success:true, user})
}
const login = async(req,res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        throw new BadRequestError('Please provide the required credentials')
    }
    const user = await User.findOne({email})
    if(!user){
      throw new NotFoundError('User does not exist')
    }
    const isPasswordCorrect = await user.comparePassword(password)
  if(!isPasswordCorrect){
      throw new UnauthenticatedError('Incorrect Credentials')
   }
   const id = user._id
   const fullname = user.fullname
    const token = jwt.sign({ id, fullname }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  res.status(200).json({success:true, token, name:user.fullname})
  console.log(user);

}
const resetpassword = async (req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token=buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
             throw new BadRequestError('No user exists with that email')
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000;
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"wawerur95@gmail.com",
                    subject:"Password reset",
                    html:
                    `<p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost:3000/resetpassword/${token}">Link</a> to reset your password</h5>`
                })
                res.status(200).json({message:"check your email"})
            })
        })
    })
}

    //forgot password change
      const newpassword = (req,res) =>{ 
        const {password,sentToken} = req.body;
        User.findOne({resetToken:sentToken, expireToken:{$gt:Date.now()}})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"Try again session expired"})
            }
            bcrypt.hash(password,10).then(hashedpassword=>{
              user.password= hashedpassword;
              user.resetToken = undefined;
              user.expireToken = undefined;
              user.save().then(user=>{
                res.json('Password set')
              })
              .catch(err=>res.status(400).json('Error' +err));
            })
             .catch(err=>res.status (404).json('Error' +err));
        })
         
            // await User.findByIdAndUpdate({_id:userId}, {
            //     password:hashedpassword,
            //    resetToken : undefined,
            //    expireToken : undefined
            // })
            // res.status(200).json({msg:"Password set"})
    }

    //optional password change
    const newpassword2 = (req,res)=>{
        const {password} = req.body;
        const {id:userId} = req.params
        if(!password || !userId){
            throw new UnauthenticatedError('Please enter password')
        }
       User.findOne({_id:userId})
        .then(user=>{
            if(!user){
                throw new BadRequestError('User does not exist')
            }
            const salt = bcrypt.genSaltSync(10);
             bcrypt.hash(password,salt).then(hashedpassword=>{
              user.password= hashedpassword;
              user.save().then(user=>{
                res.status(200).json('Password set')
              })
              .catch(err=>res.status(400).json('Error' +err));
            })
             .catch(err=>res.status (404).json('Error' +err));
        })
    }

    //getusers
    const getUsers = async (req,res)=>{
        const user = await User.find({})
        res.status(200).json({user})
    }
    //get specific user
    const getUser = async (req,res) =>{
        const {id:userId} = req.params;
        const user = await User.findById({_id:userId});
        if(!user){
            throw new NotFoundError('User does not exist')
        }
        res.status(200).json({user})
    }

    //get active or blocked users
    const getStatus = async (req, res) => {
        const {status} = req.body
        const users = await User.find({status:status})
        res.status(200).json({users});
      };

    //searching for a user
    const searchUser = async (req,res) =>{
        const {name:fullname,phone:phonenumber,email:email,status:status} = req.query
        const queryObject = {};
        if(fullname){
          queryObject.fullname = fullname
        }
        if(phonenumber){
          queryObject.phonenumber = phonenumber
        }
        if(email){
            queryObject.email = email
        }
        if (status) {
            queryObject.status = status === 'true' ? true : false;
        }
        let result = User.find(queryObject);
        const searcheduser = await result;
        if(searcheduser == ''){
            throw new CustomAPIError('No record found')
        }
        return res.status(200).json({searcheduser})

    }

    //update user 
    const updateUser = async (req,res)=>{
       const {id:userId} = req.params
       const user = await User.findByIdAndUpdate({_id:userId},req.body,{
        new:true,
        runValidators:true,
    })
       res.status(200).json({msg:'User updated', user})
       if(!user){
           throw new CustomAPIError('No user to update')
       }
    }

    //deleteusers
    const deleteUser = async (req,res)=>{
        const {id:userId} = req.params;
        const user = await User.findOneAndDelete({_id:userId})
        res.status(200).json({user})
    }

    const dashboard = async (req,res)=>{   
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({
        msg:`Hello ${req.user.username}`, 
        secret:`Here is your authorization token ${luckyNumber}`})
    }

const upload = async(req,res)=>{
    const {user:userId} = req.params;
    try {
       const {data} = req.body
       await User.findByIdAndUpdate(userId, {avatar:data},{ new: true })  
       res.status(201).json({success:true,message:'Profile Updated Successfully', data})  
    } catch (error) {
        res.status(500).json({success:false, message:'Error occured. Please try again!'})
        console.log(error.message)  
    }
}
const uploadProfile = async (req,res)=>{
    const {user} = req.params
    try {
        const result = await cloudinary.uploader.upload(req.file.path,{
        public_id:`${user}_profile`,
        width:500,
        height:500,
        crop:'fill'
        })
    
        await User.findByIdAndUpdate(user, {avatar:result.url},{ new: true })  
        res.status(201).json({success:true,message:'Profile Updated Successfully', result})
         } catch (error) {
        res.status(500).json({success:false, message:'Error occured. Please try again!'})
           console.log(error.message)  
         }
}

const pic = (req,res)=>{
    const {id:userId} = req.params
    try{
        cloudinary.v2.upload(req.file.path, function(err, result) {
            if (err) {
              req.json(err.message);
            }
            req.body.image = result.secure_url;
            User.findByIdAndUpdate(user, {avatar:result.uri},{ new: true })  
            res.status(201).json({success:true,message:'Profile Updated Successfully', result})
          });

    }catch(error){
        res.status(500).json({success:false, message:'Error occured. Please try again!'})
        console.log(error.message)  
    }

}

module.exports = {
    mpesaMessage,
    payment,
    token,
    stkPush,
    upload,
    pic,
    loading,
    login,
    signup,
    uploadProfile,
    resetpassword,
    newpassword,
    newpassword2,
    searchUser,
    getUsers,
    getUser,
    getStatus,
    updateUser,
    deleteUser,
    dashboard
}