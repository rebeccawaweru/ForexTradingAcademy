const express = require("express")
const router = express.Router()
const {newBot,getBot} = require('../controllers/bots')

router.route('/bot').post(newBot).get(getBot)

module.exports = router;