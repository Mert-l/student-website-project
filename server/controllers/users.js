const Posts  = require("../models/Post")
const Users  = require("../models/User")

const registerUser= async (req,res) =>{
    const {username, email, password, city, userPosts, likedPost, degree, pic, userId }=req.body
    try {
    const found_name =await Users.findOne({username})
    const found_mail =await Users.findOne({email})
    if(found_mail) {
        res.send({ok:true, data: "This account with this email already exists!!!!!"})
    } else if(found_name) {
      
       res.send({ok: true, data: 'this name is taken'})
    } else if (!found_name && !found_mail){
       const created_user = await Users.create({ username, email , password, city, userPosts, likedPost, degree, pic, userId })
        res.send({ok: true, data: 'user added', user: created_user})
    }
       
    } catch (error) {
        res.send(error)
    }
    }

const deleteAccount = async (req, res) => {

    try{
        const {email, password} = req.body;
const found_mail =await Users.findOne({email}) 
const found_pass =await Users.findOne({password}) 

if(found_mail && found_pass){

    const removed = await Users.deleteOne({email});  
        if(updated.acknowledged && updated.modifiedCount > 0){
             res.send({ok: true, data: 'account deleted'})
        } else{
            res.send({ok: false, data: 'account deleted wanst deletes smt wrong '})
        }

} else{
    res.send({ok: true, data: 'user doesnt exist'})
}
    } catch(err){
        res.send(err);
    }

}

const updateAccount = async (req, res) => {
try{
    const {username, new_name} = req.body;
const found =await Users.findOne({username})
if(found) {
    const updated = await Users.updateOne({username: username}, {username: new_name } )
if(updated.acknowledged && updated.modifiedCount > 0 ){
    res.send({ok: true, data: `username updatet to ${new_name} `})
} else{  res.send({ok: false, data: ' it wanst updated for some reason but the email exists'}) }

    
} else{
    res.send({ok: true, data: 'couldnt find the user'})
}
} catch(err){
    response.send(err);
}
    
}

const logIn = async (req, res) => {
 try{
    const  { email} = req.body;
    const found = Users.findOne({email});
    if(found){
        res.send('logde in ')
    } else{
        res.send('No account exist. Create one')
    }
 } catch(err){
    response.send(err)
 }
}


    module.exports = {registerUser, deleteAccount, updateAccount, logIn};