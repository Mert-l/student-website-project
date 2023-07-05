
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const ViewProfile = (props) => {
  
    const [idx, setIdx] = useState(0)
    const location = useLocation();
    console.log(location);
    const [posts, setPosts] = useState(null);

        const user = location.state.user;
        console.log('is that what i think it is', user)


        const fetchPosts = async () => {
            try {
              const response = await axios.post(
                "http://localhost:4000/post/getUserPosts",
                { userId: user._id }
              );
              console.log("fetche Ahmeds posts:", response);
              setPosts(response.data);
            } catch (error) {
              console.log(error);
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
          
            console.log( 'sliced:' ,  diff);
          
          
          }




    return(

        <>

            <div className="box_for_profile" >

                <div className="pic_name"  >

                    <img src={user.profile} />
                    <h3> {user.username} </h3>

                </div>

                <div className="user_info_rest" >  
                    <h3> {user.city}  </h3>
                    <h5> {user.bio} </h5>



                </div>


            </div>




            <div className="display_posts2">
          {
    !posts ? 

    <h1>no posts yet</h1> :  posts.map(ele => {

      return(
    
      <div className = 'post'  >

        {ele.image.length >0 ? 
        
        <div className="one_post" >

        <div className="slide" >
           
                {ele.image.length > 1 && <button id='left' type='button' onClick={  () => idx !=0 &&  setIdx(idx-1)  } >  <AiOutlineArrowLeft className='iconss' />  </button>}
        
                 <img  src={ele.image[idx]}    />
        
                {ele.image.length > 1 && <button id='right'  type='button' onClick={ () =>  idx !=ele.image.length -1 &&  setIdx(idx+1)  }  >  <AiOutlineArrowRight className='iconss' /> </button>}
        
        </div>
        
        
        <div className='post_text'   >
             <h3> {ele.title} </h3>
              {ele.description && <h5> {ele.description.substring(0, 130) + '. . .' } </h5> }
               <div  className='price_interested'>
                {ele.price ? <h5> {ele.price}€ </h5> : null }
                <h5>Interested: {ele.interested.length}  </h5>
                <h5>  {  formatDate(ele.createdAt)   }  </h5>
            </div>
        </div>
        
        
        
        
        </div>

        

        

          : 
        
              

<div className='post_text'  >
         <h3> {ele.title} </h3>
         
          {ele.description.length > 140 ? <h5> {ele.description.substring(0, 140) + '. . .'} </h5> :  <h5> {ele.description} </h5>  }
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




            </>


    );

  
};

export default ViewProfile;