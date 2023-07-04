const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: [{ type: String, required: false, unique: false }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    price: { type: Number, required: false, unique: false, default: 0 },
    tags: [{ type: String, required: false, unique: false }],
    description: { type: String, required: true },
    city: {type: String},
    interested: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        _id: false,
      },
    ],
    type: { type: String , required: true}

  }
      ,{ timestamps: true }
  );
  


module.exports = mongoose.model("post", postSchema);

// user id type sould be mongoose.Schema.Types.ObjectId

