const Posts  = require("../models/Post")
const Users  = require("../models/User")

const registerUser= async (req,res) =>{
    const {username, email, password, city, userPosts, likedPost, degree, pic }=req.body
    try {
    const found_name =await Users.findOne({username})
    const found_mail =await Users.findOne({email})
    if(found_mail) {
        res.send({ok:true, data: "This account with this email already exists!!!!!"})
    } else if(found_name) {
      
       res.send({ok: true, data: 'this name is taken'})
    } else if (!found_name && !found_mail){
        await Users.create({ username, email , password, city, userPosts, likedPost, degree, pic  })
        res.send({ok: true, data: 'user added'})
    }
       
    } catch (error) {
        res.send(error)
    }
    }

const deleteAccount = async (req, res) => {
const {email, password} = req.body;
const found_mail =await Users.findOne({email}) 
const found_pass =await Users.findOne({password}) 

if(found_mail && found_pass){

    const removed = await Users.deleteOne({email});  
    res.send({ok: true, data: 'account deleted'})

} else{
    res.send({ok: true, data: 'user doesnt exist'})
}

}

const updateAccount = async (req, res) => {
const {old_name, new_name} = req.body;
const found =await Users.findOne({username})
if(found) {
    const updated = await Users.findOneAndUpdate({username: old_name}, {username: new_name } )
    res.send({ok: true, data: `username updatet to ${new_name} `})
} else{
    res.send({ok: true, data: 'couldnt find the user'})
}
    
}

    module.exports = {registerUser, deleteAccount, updateAccount};