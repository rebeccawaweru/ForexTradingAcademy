const express = require('express')
const router = express.Router()
const {newreferral,findreferral} = require('../controllers/referral')

router.route('/newreferral').post(newreferral)
router.route('/referral/:id').get(findreferral)

module.exports = router;