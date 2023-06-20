const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { required: true, unique: true },
  userPosts : [{post_id: {type: mongoose.Schema.Types.ObjectId, ref: 'posts',}}], // do same as down
  city: { type: String, required: true },
  likedPost : [{post_id: {type: mongoose.Schema.Types.ObjectId, ref: 'posts',}, _id: false,}],
  degree : [{level: {type:String}}, {degree_name: {type:String}},  {sclool: {type:String}},]
})


module.exports = mongoose.model("user", logInSchema);