
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import ImageSlide from "./ImageSlide";
import ImageSlideNoImages from "./ImageSlideNoImages";

const Home = () => {
  const navigate = useNavigate();      


  

 const [posts, setPosts] = useState(null);

 const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/post/getPosts')
    // console.log(response)
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

        console.log( 'sliced:' ,  diff);


    }


    

      // const fetchProfilePic = async () => {
  
      //   try {
         
      //     const response = await axios.post("http://localhost:4000/user/getUser", {
      //       _id: ele.userId
      //     });
      //       console.log('does it even work')
      //     console.log("response from fetching user at home component?: ", response);
         
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      
     
     
 


    

  //  useEffect(() => {
  //       fetchProfilePic();
  //     }, [ele]);


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