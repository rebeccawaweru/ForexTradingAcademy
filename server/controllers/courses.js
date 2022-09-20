const Courses = require('../models/Courses');
const { StatusCodes } = require('http-status-codes');
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors');
const multer = require('multer');

const newCourse = async(req,res)=>{
    try {
        const {course,topic,file} = req.body;
        if(!course || !topic || !file){
            throw new BadRequestError('Kindly input the required fields')
        }
        const courses = await Courses.create({course,topic,file})
        res.status(StatusCodes.CREATED).json({courses})
    } catch (error) {
       console.log(error.message) 
    }
}

const getCourses = async(req,res)=>{
    const response = await Courses.find({})
    if(!response){
      throw new BadRequestError('No course content found')
    }
    res.status(200).json({response})
}

const getCourse = async(req,res)=>{
   const {id:courseId} = req.params;
   const course = await Courses.findById({_id:courseId})
   if(!course){
    throw new BadRequestError('No course content found')
  }
  res.status(200).json({course})
}
// const getFile = async(req,res)=>{
//     const {format:format,course:course} = req.query;
//     const queryObject = {};
//     if(format){
//         queryObject.format = format
//     }
//     if(course){
//         queryObject.course = course
//     }
//     let result = Courses.find(queryObject);
//     const response = await result;
//     if(response == ''){
//         throw new CustomAPIError('No record found')
//     }
//     return res.status(200).json({response});
// }
const getFile = async(req,res)=>{
    const {course:course} = req.params;
    const courses = await Courses.find({course:course})
    if(!courses){
        throw new CustomAPIError('No record found')
    }
    res.status(200).json({courses})
}

const getFormat = async (req,res)=>{
    const {format:format} = req.params;
    const courses = await Courses.find({format:format})
    if(!courses){
        throw new CustomAPIError('No record found')
    }
    res.status(200).json({sucess:true, courses})
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).array('file');

const uploader = async (req,res)=>{
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }

        return res.status(200).send(req.files)
    })
}


module.exports = {newCourse,getCourse,getCourses,getFile,getFormat,uploader};