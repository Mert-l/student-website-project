const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  esername: { type: String, required: true, unique: true },
  password: { required: true, unique: true },
  userPosts : { type: Array, required: true, unique: false },
  city: { type: String, required: true },
  school: { type: String, required: true },
  likedPost : [{post_id: {type: mongoose.Schema.Types.ObjectId, ref: 'posts',}, _id: false,}],,
})


module.exports = mongoose.model("user", logInSchema);