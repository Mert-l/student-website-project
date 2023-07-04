import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UploadImages from "./UploadImages";
import Images from "./Images";

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
      const response = await axios.post("http://localhost:4000/user/getUser", {
        _id: props.user._id
      });

      // console.log("response userrrrrrr: ", response);
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
      debugger
      const response = await axios.post("http://localhost:4000/post/post", {
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
      console.log("post that god please i created:", response);
    } catch (err) {
      console.log(err);
    }
    // console.log('seeeeeeeee: ', post )
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
          <input
            id="bioo"
            placeholder="description"
            name="description"
            value={post.description}
            required
          />
          <div className="tags" >
          {post.tags && post.tags.map((tag) => <h4 >{tag}</h4>)}
          </div>

      
          <input
            name="tags"
            type="text"
            onChange={handleChangeTag}
            value={tag}
          />
           <button
           
            type="button"
            onClick={() => {
              
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
          
              setTag("");
            }}
            disabled={!tag}
          >
            Add tag
          </button>

        

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