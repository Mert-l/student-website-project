const express = require('express')
const router = express.Router(),
controlfile = require("../controllers/email");


 router.post("/send_email", controlfile.send_email)




module.exports = router;