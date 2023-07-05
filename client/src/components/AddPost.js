import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UploadImages from "./UploadImages";
import Images from "./Images";
import {URL} from '../config.js'

function AddPost(props) {

  const [userr, setUser] = useState(null);

  const [post, setPost] = useState({
    image: [],
    title: "",
    type: "",
    description: "",
    price: "",
    tags: [],
  });
  const [tag, setTag] = useState("");
  const navigate = useNavigate();


  const fetchUser = async () => {
  
    try {
      const response = await axios.post(  `${URL}/user/getUser` , {
        _id: props.user._id
      });

     
      setUser(response.data.obj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);





  const handleChangeTag = (e) => {
    setTag(e.target.value);
  };

  const handleChange = (e) => {
    if (e.target.name !== "tags")
      setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const response = await axios.post(`${URL}/post/post`, {
        title: post.title,
        image: post.image,
        price: post.price,
        type: post.type,
        description: post.description,
        userId: props.user._id,
        tags: post.tags,
        city: userr.city
      });
      
      navigate("/");
     
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className="post_container3">
      <div className="pic_stuff3_" >
        {post.image.length >0 ? (
          <Images images={post.image}   />
        ) : (
          <UploadImages setPost={setPost} />
        )}
      </div>

      <form
        className="features3"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="inputs">
          <select name="type" required>
            <option vlaue='initial' >---Choose type---</option>
            <option value="market">market</option>
            <option value="tutoring">tutoring</option>
            <option value="rentals">rentals</option>
            <option value="social">social</option>
          </select>
          <input placeholder="title" name="title" id="input" required value={post.title} />
          <textarea
            id="bioo"
            placeholder="description"
            name="description"
            value={post.description}
            required
          />
          <div className="tags" >
          {post.tags && post.tags.map((tag) => <h4 >{tag}</h4>)}
          </div>

      <div className="brr" > 
          <input
            name="tags"
            type="text"
            onChange={handleChangeTag}
            value={tag}
            placeholder="name of the tag"
          />

           <button
           id='todisable'
            type="button"
            onClick={() => {
              
                if(post.tags.length < 5 ){
                  if(post.tags.length >0) {
                    setPost((prevState) => ({
            ...prevState,
            tags: [...prevState.tags, tag],
          }));
            } else{
                setPost((prevState) => ({
                    ...prevState,
                    tags: [tag],
                  }));
                   
            }
                } else{
                  document.querySelector('#todisable').disabled = true;
                }
          
              setTag("");
            }}
            disabled={!tag}
          >
             Add ⨁
          </button>

          </div> 

          {post.type && post.type !== "social" && (
            <input placeholder="price" name="price" id="input" type="number" />
          )}
        </div>
        <div className="two_buttons">
          <button type="submit">post</button>
          <button
            onClick={() =>
              setPost({
                email: "",
                image: "",
                title: "",
                description: "",
                price: "",
                tags: [],
                type: 'initial',  /// heeere
              })
            }
            type="button"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;