const express = require('express')
const router = express.Router(),
controlfile = require("../controllers/users");

router.post("/register", controlfile.registerUser)
 router.post("/logIn", controlfile.logIn)
router.delete("/deleteAccount", controlfile.deleteAccount)
 router.post("/updateAccount", controlfile.updateAccount)
 router.post("/verify_token", controlfile.verify_token)



module.exports = router;