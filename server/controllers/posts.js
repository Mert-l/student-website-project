const Posts  = require("../models/Post")
const Users  = require("../models/User")

const postPost = async (req, res) => {
  const { title, image, price, tags, interested, type, userId, description } =
  req.body;
try {
  if (!type) {
    res.send({ ok: false, message: "Post type is required!" });
  }
  const user = await Users.findOne({ _id: userId });
      console.log(user._id);
      const created_post = await Posts.create({
        title,
        image,
        price,
        userId,
        tags,
        interested,
        type,
        description
      });
      res.send({ ok: true, data: " post created", post: created_post });
    } catch (error) {
      res.send(error);
    }
  };


    const deletePost= async (req,res) =>{
       
        try {
      
            const found = await Posts.findOne({_id: req.body.updateForm._id})

            if (found){
               const  removed = await Posts.deleteOne({_id: req.body.updateForm._id})
                if(removed.acknowledged && removed.deletedCount > 0){
                    res.send({ok: true, data: 'post deleted'})
               } else{
                   res.send({ok: false, data: 'account  wanst deleted went smt wrong '})
               }
            }
           
        } catch (error) {
            res.send(error)
        }
        }

        const updatePost = async (req, res) => {
     
            try{
              const updated = await  Posts.findOneAndUpdate({_id: req.body._id},  req.body )
                    res.send({ok: true, data: 'post updated', post : updated})
            } catch(err){

                res.send(error)
            
            }

        }

        const likePost = async(req,res)=>{
            const {postId, userId}= req.body
            try {
              const offer = await Posts.findOneAndUpdate({_id: postId}, {$push: {interested: {userId : userId}}}) 
              res.send('post was liked')
             } catch (error) {
              res.send(error)
            }
          }


          const getPost= async (req,res) =>{
            try {
                const post = await Posts.find({})
                res.send(post)
            } catch (error) {
                res.send(error)
            }
            }

            const getUserPost= async (req,res) =>{
              const {userId} = req.body;

              try {
                  const post = await Posts.find({userId: userId })
                  res.send(post)
              } catch (error) {
                  res.send(error)
              }
              }





    module.exports = {postPost, deletePost, updatePost, likePost, getPost, getUserPost}