import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import ImageSlide from "./ImageSlide";
import ImageSlideNoImages from "./ImageSlideNoImages";
import {URL} from '../config.js'
import Sidebar_nav from './Sidebar.js';
const Home = (props) => {
const navigate = useNavigate();    
  
  





 const [posts, setPosts] = useState(null);

 const fetchPosts = async () => {
  


  try {
   
    const response = await axios.post(    `${URL}/post/getPosts`  , {city: props.city } )
   
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
        let differ = (new Date() - new Date(sliced)) / 1000 / 60 / 60 / 24 ;
        let diff = Math.round(differ)
        if(diff <= 1){
          return 'posted today'
        }
        else if(diff> 1){
          return `posted ${diff} days ago`
        }
        else if(diff > 30){
          return `posted more that 1 month agp`
        }

   


    }








return(

  <div className = 'display_posts' >
    {/* <Sidebar_nav/> */}
  {
    !posts ? 

    <h1>no posts yet</h1> :  posts.map(ele => {

      return(
    
      <div className = 'post'  >

        {ele.image.length >0 ? 
        
        <ImageSlide  dat={ele}  formatDate={formatDate}   />

        

        

          : 

              

<div className='post_text_no_img' onClick={() => navigate("/IndividualPostPage", {state:{ele}})   }  >
        <ImageSlideNoImages  dat={ele}  formatDate={formatDate}   />
          
         
          {/* {ele.description.length > 140 ? <h5> {ele.description.substring(0, 140) + '. . .'} </h5> :  <h5> {ele.description} </h5>  }
           <div  className='price_interested'>
            {ele.price ? <h5> {ele.price}€ </h5> : null }
            <h5>Interested: {ele.interested.length}  </h5>
            <h5>  {  formatDate(ele.createdAt)   }  </h5> */}
        {/* </div> */}
    </div>


            

      
      
      }



      </div>
    
      )
    
    }
    )}
   
  
</div>

)

  
};

export default Home;