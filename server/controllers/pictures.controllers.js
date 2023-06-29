const Posts  = require("../models/Post")
const Users  = require("../models/User")
const Pictures = require("../models/pictures.models");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });


  const get_picture = async (req, res) => {
    try {
      const pictures = await Pictures.findOne({public_id});
      res.json({ ok: true, pictures });
    } catch (error) {
      res.json({ ok: false });
    }
  };

  const upload = async (req, res) => {
    const { files } = req.body;
    let pictures = files.map((pic) => {
      return {
        public_id: pic.uploadInfo.public_id,
        photo_url: pic.uploadInfo.secure_url,
      };
    });
  
    try {
      const created = await Pictures.create(pictures);
      console.log(created);
      res.json({ ok: true, created });
    } catch (error) {
      res.json({ ok: false });
    }
  };


module.exports ={upload, get_picture}












module.exports = {}