const Uploads = require('../models/Uploads')
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors')
const newUpload = async(req,res)=>{
    const {title,price,type,avatar,description,link} = req.body
    const uploads = await Uploads.create({title,price,type,avatar,description,link})
    res.status(200).json({success:true, uploads})
}

const getUploads = async(req,res)=>{
    const uploads = await Uploads.find({})
    res.status(200).json({uploads})
}

const getupload = async (req,res) =>{
    const {id:uploadId} = req.params;
    const upload = await Uploads.findById({_id:uploadId});
    if(!upload){
        throw new NotFoundError('Upload does not exist')
    }
    res.status(200).json({upload})
}

const updateUpload = async(req,res)=>{
    const {id:uploadId} = req.params
    const upload = await Uploads.findByIdAndUpdate({_id:uploadId},req.body,{
     new:true,
     runValidators:true,
 })
    if(!upload){
        res.status(500).json('Upload not found')
    }
    res.status(200).json({success:true, upload})
}

const deleteUpload = async(req,res)=>{
    const {id:uploadId} = req.params
    const upload = await Uploads.findByIdAndDelete({_id:uploadId})
    if(!upload){
        res.status(500).json('error')
    }
    res.status(200).json({success:true, upload})
}

const findTitle = async(req,res)=>{
    const {title} = req.body;
    const response = await Uploads.find({type:title})
    if(!response){
        res.status(500).json('error')
    }
    res.status(200).json({response})
}
const findTitle2 = async(req,res)=>{
    const {title} = req.body;
    const response = await Uploads.find({title:title})
    if(!response){
        res.status(500).json('error')
    }
    res.status(200).json({response})
}



module.exports = {newUpload, getUploads, updateUpload,deleteUpload,getupload,findTitle,findTitle2 }