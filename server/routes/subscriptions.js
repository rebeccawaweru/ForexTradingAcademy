const express = require("express")
const router = express.Router()
const {newSubscription,getSubscriptions} = require('../controllers/subscriptions')

router.route('/subscriptions').post(newSubscription).get(getSubscriptions)

module.exports = router;