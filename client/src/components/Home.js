
import axios from "axios";
import React, {useState, useEffect} from "react";

const Home = () => {
 const [post, setPost] = useState(null);
const getPosts = () => {


   
  
  useEffect(() => {
      axios.get('http://localhost:4000/posts/post')
  .then((response) => {
        setPost(response.data);
      });
    }, []);

  }






  return (

    <div>

      <h3> {post.title} </h3>

      {post.image ? <img src= {post.image}/> : null  }
      {post.price ? <h5> {post.price} </h5> : null }
      <h5>Interested: {post.interested.length}  </h5>





    </div>





  )
};

export default Home;