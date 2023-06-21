const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
 
    title: { type: String, required: true },
    image: { type: String, required: false, unique: false },
    userId: { type: String, required: true, unique: false},
    price: { type: Number, required: false, unique: false, default: 0 },
    tags: { type: Array, required: false, unique: false },
    interested: [{user_id: {type: mongoose.Schema.Types.ObjectId,ref: 'user',}, _id: false,}],
    type :{type: String}
    
    
    })


module.exports = mongoose.model("post", postSchema);

// user id type sould be mongoose.Schema.Types.ObjectId

