const User = require('../models/User')
const Admin = require('../models/AdminModel')
const { StatusCodes } = require('http-status-codes');
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const crypto = require("crypto")
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.SENDGRID_API_KEY
    }
}))
const newUser = async(req,res)=>{
    const {fullname,email,phonenumber,password,usertype} = req.body
    if(!fullname || !email || !phonenumber || !password){
        throw new BadRequestError('Please provide the required credentials')
    }
    const finduser = await User.findOne({email})
    if(finduser){
        throw new UnauthenticatedError('User Already Exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password,salt)
    const user = await User.create({fullname,email,phonenumber,password:hashedpassword,usertype})
    res.status(StatusCodes.CREATED).json({success:true, id:user._id})
}
const login = async(req,res)=>{
    const {email,password} = req.body;
    if( !email || !password){
        throw new BadRequestError('Please provide the required credentials')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('User does not exist')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Incorrect credentials')
    }
    const id = user._id
    const fullname = user.fullname
    const token = jwt.sign({ id, fullname }, process.env.JWT_SECRET, {
    expiresIn: '30d',
    })
    res.status(200).json({success:true, token, id:user._id})
}
const adminlogin = async(req,res)=>{
    const {email,password} = req.body;
    if( !email || !password){
        throw new BadRequestError('Please provide the required credentials')
    }
    const user = await Admin.findOne({email})
    if(!user){
        throw new UnauthenticatedError('User does not exist')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Incorrect credentials')
    }

    res.status(200).json({success:true,id:user._id})
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

//getUsers
const getUsers = async (req,res) =>{
    const users = await User.find({});
    res.status(200).json({users})
}
const updateUser = async(req,res)=>{
    const {id:userId} = req.params
    const user = await User.findByIdAndUpdate({_id:userId},req.body,{
     new:true,
     runValidators:true,
 })
    if(!user){
        throw new CustomAPIError('No user to update')
    }
    res.status(200).json({success:true, user})
}

const resetpassword = async (req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
             res.status(500).json('No user exists with that email')
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000;
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"forexarenakenya@gmail.com",
                    subject:"Password reset",
                    html:
                    `<p>You requested for password reset</p>
                    <h5>click in this <a href="https://forextradingacademy.co.ke/confirm/${token}">Link</a> to reset your password</h5>`
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
    })}

    
const adminPassword = async(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
      Admin.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
             res.status(500).json('No user exists with that email')
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000;
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"forexarenakenya@gmail.com",
                    subject:"Password reset",
                    html:
                    `<p>You requested for password reset</p>
                    <h5>click in this <a href="https://forextradingacademy.co.ke/confirm2/${token}">Link</a> to reset your password</h5>`
                })
                res.status(200).json({message:"check your email"})
            })
        })
    })
}
//admin
const newpassword2 = async (req,res) =>{ 
    const {password,sentToken} = req.body;
   await Admin.findOne({resetToken:sentToken})
    .then(user=>{
        if(!user){
            return res.status(500).json({error:"Try again session expired"})
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
})}

const findAddedUser = async(req,res)=>{
    const {usertype} = req.body;
    const users = await User.find({usertype:usertype})
    if(!users){
        res.status(500).json('No added users')
    }
    res.status(200).json({success:true, users})
}

const deleteUser = async(req,res)=>{
    const {id:userId} = req.params
    const user = await User.findByIdAndDelete({_id:userId})
    if(!user){
        res.status(500).json('error')
    }
    res.status(200).json({success:true, user})
}

//sending bulky email
const sendMultiple = async(req,res)=>{ 
    const {subject,message} = req.body;   
    User.find({}, function(err, allUsers){
        if(err){
            console.log(err);
        }
        var mailList = [];
        allUsers.forEach(function(users){
            mailList.push(users.email);
            return mailList;
        });
        if(mailList){
            transporter.sendMail({
                bcc:mailList,
                from:"forexarenakenya@gmail.com",
                subject:subject,
                html:
                `<p>Hello,
                ${message}</p>`
            }).then(response=>{
                res.json(response)
            })
        }
    });
}
//send custom bulk email
const sendCustomMultiple = async(req,res)=>{ 
    const {subject,message,emails} = req.body;   
        if(err){
            console.log(err);
        }
        var mailList = [];
        mailList.push(emails);
        if(mailList){
            transporter.sendMail({
                bcc:mailList,
                from:"forexarenakenya@gmail.com",
                subject:subject,
                html:
                `<p>Hello,
                ${message}</p>`
            }).then(response=>{
                res.json(response)
            })
        }
}


module.exports ={
    sendMultiple,
    sendCustomMultiple,
    deleteUser,
    updateUser,
    newUser,
    login,
    getUser,
    getUsers,
    adminPassword,
    resetpassword,
    newpassword,
    newpassword2,
    adminlogin,
    findAddedUser 
}


// const resetpassword = async (req,res)=>{
//     crypto.randomBytes(32,(err,buffer)=>{
//         if(err){
//             console.log(err)
//         }
//         const token=buffer.toString("hex")
//         User.findOne({email:req.body.email})
//         .then(user=>{
//             if(!user){
//              throw new BadRequestError('No user exists with that email')
//             }
//             user.resetToken = token
//             user.expireToken = Date.now() + 3600000;
//             user.save().then((result)=>{
//                 transporter.sendMail({
//                     to:user.email,
//                     from:"wawerur95@gmail.com",
//                     subject:"Password reset",
//                     html:
//                     `<p>You requested for password reset</p>
//                     <h5>click in this <a href="http://localhost:3000/resetpassword/${token}">Link</a> to reset your password</h5>`
//                 })
//                 res.status(200).json({message:"check your email"})
//             })
//         })
//     })
// }



    //forgot password change
    //   const newpassword = (req,res) =>{ 
    //     const {password,sentToken} = req.body;
    //     User.findOne({resetToken:sentToken, expireToken:{$gt:Date.now()}})
    //     .then(user=>{
    //         if(!user){
    //             return res.status(422).json({error:"Try again session expired"})
    //         }
    //         bcrypt.hash(password,10).then(hashedpassword=>{
    //           user.password= hashedpassword;
    //           user.resetToken = undefined;
    //           user.expireToken = undefined;
    //           user.save().then(user=>{
    //             res.json('Password set')
    //           })
    //           .catch(err=>res.status(400).json('Error' +err));
    //         })
    //          .catch(err=>res.status (404).json('Error' +err));
    //     })
         
    //         // await User.findByIdAndUpdate({_id:userId}, {
    //         //     password:hashedpassword,
    //         //    resetToken : undefined,
    //         //    expireToken : undefined
    //         // })
    //         // res.status(200).json({msg:"Password set"})
    // }



   //optional password change
    // const newpassword2 = (req,res)=>{
    //     const {password} = req.body;
    //     const {id:userId} = req.params
    //     if(!password || !userId){
    //         throw new UnauthenticatedError('Please enter password')
    //     }
    //    User.findOne({_id:userId})
    //     .then(user=>{
    //         if(!user){
    //             throw new BadRequestError('User does not exist')
    //         }
    //         const salt = bcrypt.genSaltSync(10);
    //          bcrypt.hash(password,salt).then(hashedpassword=>{
    //           user.password= hashedpassword;
    //           user.save().then(user=>{
    //             res.status(200).json('Password set')
    //           })
    //           .catch(err=>res.status(400).json('Error' +err));
    //         })
    //          .catch(err=>res.status (404).json('Error' +err));
    //     })
    // }
