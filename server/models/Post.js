const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    image: { type: Image, required: false, unique: false },
    userId: { type: String, required: true, unique: true},
    price: { type: Number, required: false, unique: false, default: 0 },
    tags: { type: Array, required: false, unique: false },
    interested: [{user_id: {type: mongoose.Schema.Types.ObjectId,ref: 'users',}, _id: false,}],
    type :{type: String}
    
    
    })


module.exports = mongoose.model("post", postSchema);



