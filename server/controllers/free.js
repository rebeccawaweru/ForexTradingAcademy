const FreeClass = require('../models/FreeClasses')

const newStudent = async(req,res)=>{
    const {firstname,lastname, phonenumber,email,country,city, mode,morning,evening,afternoon} = req.body
    // if(!firstname || !lastname || !phonenumber || !email || !country || !city || !mode ){
    //     res.status(400).json("Fill in the required fields")
    // }
    const newstudent = await FreeClass.create({firstname,lastname, phonenumber,email,country,city, mode,morning,afternoon,evening})
    res.status(200).json({success:true, newstudent})
}

const getStudents = async(req,res)=>{
    const students = await FreeClass.find({})
    res.status(200).json({success:true, students})
}


module.exports = {newStudent, getStudents}
