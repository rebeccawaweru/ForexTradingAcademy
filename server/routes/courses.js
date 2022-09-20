require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {newCourse,getCourse,getCourses,getFile, getFormat,uploader} = require('../controllers/courses')
const {courseMiddleware} = require('../middleware/permissions')
const path = require('path');
const crypto = require('crypto')
const {GridFsStorage} = require('multer-gridfs-storage');
const methodOverride = require('method-override');
const Grid = require('gridfs-stream');
const multer = require('multer');
const Storage = multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
});
const upload = multer({
    storage:Storage
})
// const conn = mongoose.createConnection(process.env.MONGO_URI);
// // Init gfs
// let gfs;
// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);  
//   gfs.collection('uploads');
// });
// const storage = new GridFsStorage({
//     url:process.env.MONGO_URI,
//     file:(req,file)=>{
//         return new Promise((resolve,reject)=>{
//             crypto.randomBytes(16,(err,buf)=>{
//                 if(err){
//                     return reject(err)
//                 }
//                 const filename = buf.toString('hex')+ path.extname(file.originalname)
//                 const fileInfo ={
//                     filename:filename,
//                     bucketName:'uploads'
//                 };
//                 resolve(fileInfo);
//             });
//         });
//     }
// })


router.post('/newcourse',newCourse)
router.post('/upload', uploader)
router.get('/course', getCourses);
router.get('/course/:id', getCourse)
router.get('/file/:course', getFile);
router.get('/file/:format', getFormat);

module.exports = router
