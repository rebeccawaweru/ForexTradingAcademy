
const express = require('express')
const router = express.Router()
const {payment,token,stkPush, login, signup, dashboard, resetpassword, newpassword,newpassword2, getUsers,searchUser, deleteUser, updateUser,getUser, loading,  uploadProfile, pic, upload,mpesaMessage} = require('../controllers/mpesa')
const authMiddleware = require('../middleware/authentication')
const permissionMiddleware = require('../middleware/permissions')
const User = require('../models/User')

const multer = require('multer');
// const storage = multer.diskStorage({
//   filename: function(req, file, callback) {
//     callback(null, Date.now() + file.originalname);
//     }
// });
const storage = multer.diskStorage({
  destination:function(request,file,callback){
    callback(null,'./public/uploads/images')
  }
})
const imageFilter = function(req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
  return cb(new Error("Only image files are accepted!"), false);
  }
  cb(null, true);
  };
  // const upload = multer({ storage: storage, fileFilter: imageFilter });

// const fileFilter = (req,file,cb)=>{
  
//   if(file.mimetype.startsWith('image')){
//       cb(null, true)
//   }else{
//       cb('Invalid image file!', false);
//   }
// }
// const uploads = multer({storage, fileFilter})


router.get('/', loading)
router.get('/mpesa', payment)
router.post('/stk/push',token,stkPush)
router.post('/stk/response', mpesaMessage)
router.post('/login',login)
router.get('/login',getUsers)
router.post('/signup',signup)
router.get('/search',searchUser)
router.post('/resetpassword', resetpassword)
router.put('/newpassword', newpassword)
router.put('/newpassword2/:id', newpassword2)
router.patch('/:id', updateUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)

//posting picture
// router.post('/upload/:user', upload.single('profile'), uploadProfile)
// router.post('/upload/:user', upload.single('image'), pic)

router.put('/upload/:user', upload)



module.exports = router


