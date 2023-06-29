import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UploadImages from "./UploadImages";
import Images from "./Images";

function AddPost(props) {
  const [post, setPost] = useState({
    image: "",
    title: "",
    type: "",
    description: "",
    price: "",
    tags: [],
  });
  const [tag, setTag] = useState("");
  const navigate = useNavigate();

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
      debugger;
      const response = await axios.post("http://localhost:4000/post/post", {
        title: post.title,
        image: post.image,
        price: post.price,
        type: post.type,
        description: post.description,
        userId: props.user._id,
      });
      navigate("/");
      console.log("post response:", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container_post_creating">
      <div
        className="pic_stuff"
        style={{
          minWidth: "50%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: `${
            post.image && post.image.length > 1 ? "1fr 1fr" : "1fr"
          }`,
          flexWrap: "wrap",
        }}
      >
        {post.image ? (
          <Images images={post.image} />
        ) : (
          <UploadImages setPost={setPost} />
        )}
      </div>

      <form
        className="features"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="inputs">
          <select name="type" required>
            <option>---Choose type---</option>
            <option value="market">market</option>
            <option value="tutoring">tutoring</option>
            <option value="rentals">rentals</option>
            <option value="social">social</option>
          </select>
          <input placeholder="title" name="title" id="input" required />
          <input
            id="bioo"
            placeholder="description"
            name="description"
            required
          />
          {post.tags && post.tags.map((tag) => <span>{tag}</span>)}
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