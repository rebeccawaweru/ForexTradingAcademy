const express = require('express')
const router = express.Router()
const {newUser,sendMultiple,sendCustomMultiple,deleteUser, login,getUser,findAddedUser ,getUsers,updateUser,adminPassword,resetpassword,newpassword,newpassword2,adminlogin} = require('../controllers/auth')

router.route('/multiple').post(sendMultiple)
router.route('/multiplecustom').post(sendCustomMultiple)
router.route('/signup').post(newUser);
router.route('/login').post(login);
router.route('/adminlogin').post(adminlogin);
router.route('/user/:id').get(getUser).patch(updateUser);
router.route('/users').get(getUsers);
router.route('/admin').put(adminPassword);
router.route('/reset').post(resetpassword)
router.route('/newpassword').post(newpassword)
router.route('/adminreset').post(adminPassword)
router.route('/newpassword2').post(newpassword2)
router.route('/addedusers').post(findAddedUser)
router.route('/deleteuser/:id').delete(deleteUser)
module.exports = router;
