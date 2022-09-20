'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles} = require('../controllers/fileupload');
const {newUpload, getUploads, findTitle2,updateUpload,deleteUpload,getupload,findTitle} = require('../controllers/uploads')
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);

router.post('/newupload', newUpload)
router.patch('/updateupload/:id', updateUpload)
router.get('/getuploads', getUploads)
router.delete('/deleteupload:id', deleteUpload)
router.get('/getupload/:id', getupload)
router.post('/find', findTitle)
router.post('/find2', findTitle2)
module.exports = router
