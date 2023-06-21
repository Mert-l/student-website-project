const Posts  = require("../models/Post")
const Users  = require("../models/User")

const postPost= async (req,res) =>{
    const {title, image, userId, price, tags, interested, type }=req.body
    try {
   
   
        const created_post = await Posts.create({title, image, userId, price, tags, interested, type })
        res.send({ok: true, data: ' post created', post: created_post})
  
    
       
    } catch (error) {
        res.send(error)
    }
    }

    module.exports = {postPost}