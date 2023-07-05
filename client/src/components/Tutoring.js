
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import ImageSlide from "./ImageSlide";
import {URL} from '../config.js'

const Tutoring = (props) => {
  
  const navigate = useNavigate();

  const [posts, setPosts] = useState(null);
 
  const fetchPosts = async () => {
    try {
      const response = await axios.post(
        `${URL}/post/getTypePosts`,
        { type: 'tutoring', city: props.city  }
      );
    
      setPosts(response.data);
    } catch (error) {
 
    }
  };

  useEffect(() => {
    fetchPosts();
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
   {
     !posts ? 
 
     <h1>no posts yet</h1> :  posts.map(ele => {
 
       return(
     
       <div className = 'post'  >
 
         {ele.image.length >0 ? 
         
         <ImageSlide  dat={ele}  formatDate={formatDate}   />
 
         
 
         
 
           : 
 
               
 
 <div className='post_text' onClick={() => navigate("/IndividualPostPage", {state:{ele}})}  >
          <h3> {ele.title} </h3>
           {ele.description && <h5> {ele.description} </h5> }
            <div  className='price_interested'>
             {ele.price ? <h5> {ele.price}€ </h5> : null }
             <h5>Interested: {ele.interested.length}  </h5>
             <h5>  {  formatDate(ele.createdAt)   }  </h5>
         </div>
     </div>
 
 
             
 
       
       
       }
 
 
 
       </div>
     
       )
     
     })}
    
   
 </div>
 
 )
   
 };
 








export default Tutoring;