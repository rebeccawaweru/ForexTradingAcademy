const express = require('express')
const router = express.Router()
const {newStudent,getStudents} = require('../controllers/free')

router.route('/freeclasses').post(newStudent).get(getStudents)

module.exports = router;