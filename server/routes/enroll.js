const express = require('express')
const router = express.Router()
const {newEnroll,getEnroll} = require('../controllers/enroll')

router.route('/enroll').post(newEnroll);
router.route('/getenroll').get(getEnroll);

module.exports = router