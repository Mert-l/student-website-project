
import axios from "axios";
import React, {useState, useEffect} from "react";

const Home = () => {
 const [posts, setPosts] = useState(null);

 const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/post/getPosts')
    console.log(response)
setPosts(response.data)
  } catch (error) {
    console.log(error);
  }
}


  useEffect(() => {
  fetchPosts()
    }, []);



return(

  <div>
  {
    null ? 
    <h1>no posts yet</h1> :  posts.map(ele => {

      return(
    
        <div>
        <h2> {ele.title} </h2>
        {ele.image ? <img src= {ele.image}/> : null  }
          {ele.price ? <h5> {ele.price} </h5> : null }
          <h5>Interested: {ele.interested.length}  </h5>
      </div>
    
      )
    
    })}
   
  
</div>




)







  
};

export default Home;