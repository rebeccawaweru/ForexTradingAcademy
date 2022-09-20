const mongoose = require('mongoose')
const User = require('../models/User')
const Courses = require('../models/Courses')
const { UnauthenticatedError} = require('../errors')

const permissionMiddleware = async (req,res,next) =>{
  const {user:userId} = req.params
  const user = await User.findById({_id:userId})
  if(!user){
    throw new UnauthenticatedError('You do not have enough permission to access the resource')
  }
  next()
}

const courseMiddleware = async (req,res,next)=>{
  const {course:course} = req.params
  const courses = await Courses.find({course:course})
  if(!courses){
      throw new CustomAPIError('No record found')
  }
  next()

}


module.exports = {permissionMiddleware, courseMiddleware}