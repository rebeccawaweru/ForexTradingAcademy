const express = require('express');
const router = express.Router();
const upload = require("../controllers/uploadfile")



router.post('/uploads', upload)

module.exports = router