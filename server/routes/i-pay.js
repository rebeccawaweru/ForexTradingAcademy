const express = require('express');
const router = express.Router();
const {ipay,callback,ipay2} = require('../controllers/ipay')

router.post('/ipay-api', ipay)
router.get('/ipaycallback', callback)
router.post('/ipay-api2', ipay2)

module.exports = router
