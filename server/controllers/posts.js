const Posts  = require("../models/Post")
const Users  = require("../models/User")

const postPost = async (req, res) => {
    const { title, image, price, tags, interested, type, email } = req.body;
  
    try {
      const user = await Users.findOne({ email });
      console.log(user._id);
      const created_post = await Posts.create({
        title,
        image,
        price,
        userId: user._id,
        tags,
        interested,
        type,
      });
      res.send({ ok: true, data: " post created", post: created_post });
    } catch (error) {
      res.send(error);
    }
  };


    const deletePost= async (req,res) =>{
       
        try {
       
            const found = await Posts.findOne({_id: req.body.id})

            if (found){
                removed = await Posts.deleteOne({_id: req.body.id})
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

        const updatePost = async (res, req) => {
                const object_to_update = res.object
            try{
                    const updated = await Posts.findOneAndUpdate({_id: req.body.id, object_to_update} )
                    res.send({ok: true, data: 'post updated', post : updated})
            } catch(err){

                res.send(error)
            
            }

        }



    module.exports = {postPost, deletePost, updatePost}