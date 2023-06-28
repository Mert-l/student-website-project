const express = require('express')
const router = express.Router(),
controlfile = require("../controllers/posts");

router.post("/post", controlfile.postPost)
router.post("/updatePost", controlfile.updatePost)
 router.delete("/deletePost", controlfile.deletePost)
 router.post("/likePost", controlfile.likePost)
 router.get("/getPosts", controlfile.getPost)
 router.post("/getUserPosts", controlfile.getUserPost)




module.exports = router;