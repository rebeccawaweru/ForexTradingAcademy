const express = require('express');
const router = express.Router()
const {newMessage,getMessages} = require('../controllers/messages')

router.route('/newusermessage').post(newMessage)
router.route('/getmessages').get(getMessages)

module.exports = router