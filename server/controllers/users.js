const Posts  = require("../models/Post")
const Users  = require("../models/User")
const argon2 = require("argon2");
const salt = "4r3frhu87";
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;


const registerUser= async (req,res) =>{
    const {username, email, password, city,password_repeat  }=req.body
    
    try {
        
    const found_name =await Users.findOne({username})
    const found_mail =await Users.findOne({email})
    if(found_mail) {
        res.send({ok:false, data: "This account with this email already exists!!!!!"})
    } else if(found_name) {
      
       res.send({ok: false, data: 'this name is taken'})
    } else if(!username || !email || !password || !city || !password_repeat){
        res.send({ok:false, data:'all fields requirded'})
    }   else if (!validator.isEmail(email)) {
        return res.json({ ok: false, data: "Invalid email provided" });
      }

    
    
    else if (!found_name && !found_mail){
        
      if(password == password_repeat){
        const hash = await argon2.hash(password, salt);
        const created_user = await Users.create({ username, email ,password: hash, city })
        res.send({ok: true, data: 'Your account has been created, you will be redirected to log in page', user: created_user})
      } else{res.send({ok:false, data:'passwords must match'})}
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
    
const found =await Users.findOne({_id: req.body._id} )
if(found) {
    const updated = await  Users.findOneAndUpdate({_id: req.body._id},  req.body, {new: true} )
    res.send({ok: true, data: `account has been updated`, updated_user: updated})
// if(updated.acknowledged && updated.modifiedCount > 0 ){
//     res.send({ok: true, data: `account has been updated`})
// } else{  res.send({ok: false, data: ' it wanst updated for some reason but the email exists'}) }

    
} else{
    res.send({ok: true, data: 'couldnt find the user'})
}
} catch(err){
    response.send(err);
}
    
}

const logIn = async (req, res) => {

    const  { email, password} = req.body;

    if (!email || !password) {
        return res.json({ ok: false, data: "All fields are required" });
      }
      if (!validator.isEmail(email)) {
        return res.json({ ok: false, data: "Invalid email provided" });
      }

 try{
    
    const found = await Users.findOne({email});
    if(found){
        const match = await argon2.verify(found.password, password);
        if(match){
            const token = jwt.sign({ _id: found._id, city: found.city }, jwt_secret, {
                expiresIn: "2h",
              });
              res.send({ ok: true, data: "welcome back", token});
        } else{
            res.send({ok:false, data:'wrong password'})        }
       
    } else{
        res.send({ok: false, data: 'Tha account does not exist'})
    }
 } catch(err){
res.send({ok:false, data:'smth wrong'})
 }
}



const getUser= async (req,res) =>{
    
    try {
        const found = await Users.findOne({_id: req.body._id});
        if(found){
            res.send({ok: true, obj: found})
        } else{
            res.send({ok: false, data: 'didnt find it or smth'})
        }
    } catch (error) {
        res.send(error)
    }
    }


const verify_token = (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    jwt.verify(token, jwt_secret, (err, succ) => {
      err
        ? res.json({ ok: false, message: "Token is corrupted" })
        : res.json({ ok: true, succ });
    });
  };


    module.exports = {registerUser, deleteAccount, updateAccount, logIn, verify_token, getUser};