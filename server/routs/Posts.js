const express = require('express')
const router = express.Router(),
controlfile = require("../controllers/posts");

router.post("/post", controlfile.postPost)
router.post("/updatePost", controlfile.updatePost)
 router.post("/deletePost", controlfile.deletePost)
 router.post("/likePost", controlfile.likePost)
 router.post("/getPosts", controlfile.getPost)
 router.post("/getUserPosts", controlfile.getUserPost)
 router.post("/getTypePosts", controlfile.getTypePost)




module.exports = router;