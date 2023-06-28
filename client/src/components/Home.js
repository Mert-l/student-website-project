
import axios from "axios";

import React, {useState, useEffect} from "react";

const Home = () => {
 const [posts, setPosts] = useState(null);

 const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/post/getPosts')
    console.log(response)
setPosts(response.data.reverse())
  } catch (error) {
    console.log(error);
  }
}


  useEffect(() => {
  fetchPosts()
    }, []);


    const formatDate =(date) =>{

        let sliced = date.slice(0, 10).split('-').join(', ');
        let diff = (new Date() - new Date(sliced)) / 1000 / 60 / 60 / 24 ;
        if(diff < 1){
          return 'posted today'
        }
        else if(diff> 1){
          return `posted ${diff} days ago`
        }
        else if(diff > 30){
          return `posted more that 1 month agp`
        }

        console.log( 'sliced:' ,  diff);


    }



return(

  <div className = 'display_posts' >
  {
    !posts ? 

    <h1>no posts yet</h1> :  posts.map(ele => {

      return(
    
        <div className = 'post' >
            
          <div className='post_inside' >   
          {ele.image ? <img src= {ele.image}/> : null  }
          <div className='post_text' >
          <h3> {ele.title} </h3>
           
            {ele.description && <h5> {ele.description} </h5> }
              <div  className='price_interested'>
                {ele.price ? <h5> {ele.price}€ </h5> : null }
                <h5>Interested: {ele.interested.length}  </h5>
                <h5>  {  formatDate(ele.createdAt)   }  </h5>
              </div>
          </div>
            
             </div>
          

      </div>
    
      )
    
    })}
   
  
</div>




)







  
};

export default Home;