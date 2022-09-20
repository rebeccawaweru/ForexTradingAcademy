const express = require('express');
const router = express.Router();
const {getChats,addMessage,getMessages,addAdminMessage,getAdminMessages} = require('../controllers/chat')

router.get('/chats', getChats)
router.post("/addmessage", addMessage);
router.get("/getmessage/:id", getMessages);
router.post("/adminmessage", addAdminMessage);
router.get("/getadminmessage/:id",getAdminMessages)

module.exports = router