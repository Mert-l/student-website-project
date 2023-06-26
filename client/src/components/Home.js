
import axios from "axios";
import React, {useState, useEffect} from "react";

const Home = () => {
 const [post, setPost] = useState(null);

 const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/posts/getPosts')
    console.log(response)
setPost(response.data)
  } catch (error) {
    console.log(error);
  }
}


  useEffect(() => {
  fetchPosts()
    }, []);









  return (

    <div classname= "post">

      <h3> {post.title} </h3>

      {post.image ? <img src= {post.image}/> : null  }
      {post.price ? <h5> {post.price} </h5> : null }
      <h5>Interested: {post.interested.length}  </h5>





    </div>





  )
};

export default Home;