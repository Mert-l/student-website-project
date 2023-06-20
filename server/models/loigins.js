const mongoose = require("mongoose");

const logInSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  esername: { type: String, required: true, unique: true },
  password: { required: true, unique: true },
  userPosts : { type: Array, required: true, unique: false }
});

const postSchema = new mongoose.Schema({
userId: { type: String, required: true, unique: true },
title: { type: String, required: true },
post_time: { type: Number, required: true },
image: { type: Image, required: false, unique: false },
userId: { type: String, required: true, unique: true},
price: { type: Number, required: false, unique: false },
tags: { type: Array, required: false, unique: false },
interested: { type: Number, required: true, unique: false },


})

module.exports = mongoose.model("category", logInSchema);