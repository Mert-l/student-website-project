
import { NavLink } from "react-router-dom";



import {useLocation} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';




const IndividualPostPage = () => {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0)
    const location = useLocation();
    const {title, image, createdAt, interested, price, tags, type,description , userId} = location.state.ele;
    const [user, setUser] = useState(null)

    const fetchUser = async () => {
  
        try {
         
          const response = await axios.post("http://localhost:4000/user/getUser", {
            _id: userId
          });
        
          // console.log("fetchet op i hope: ", response);
          setUser(response.data.obj)
          
        
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        fetchUser();
      }, []);

      //  console.log( 'trying again'  ,user)
    
// console.log( 'passed objecttttttt: ' , location.state)

const goBack =(type) =>{
   let str = '/' + type;
    // console.log( 'strrrrrrrrrrr', str)
   return str;
}

const here_because_there_not_work = () => {

  navigate('/Contact',  {state:{user}});

}

// user &&  console.log('uuuuuuuuuuuuuuuu', user.email)

    return (
  <div>

          {image.length > 0 ? 
        
            <div className='post_container' >

            <div className="slides_maybe" >

                {image.length > 1 ?   
                
                <div className="slide_for_single_post_page" >
   
                {image.length > 1 && <button id='left2' type='button' onClick={  () => idx !=0 &&  setIdx(idx-1)  } >  <AiOutlineArrowLeft className='iconss2' />  </button>}
        
                 <img  src={image[idx]}    />
        
                {image.length > 1 && <button id='right2'  type='button' onClick={ () =>  idx !=image.length -1 &&  setIdx(idx+1)  }  >  <AiOutlineArrowRight className='iconss2' /> </button>}
        
        </div>
              
              :

              <img src={image[0]}></img>
              
              }

            </div>

            <div className="post_rest" >

                  <div className="barabum" >
                      <h3 id='theType'  >   {type} </h3> 

                              {user && <div     className='yhh' >
                                    <img  src={user.profile}  onClick={() => navigate('/ViewProfile',  {state:{user}})  } className = 'profile_button'  />
                                    <h5> {user.username} </h5>

                           </div>  
}
                  </div>

                  <h4> {title} </h4> 
                  <h5> {description} </h5>  

                <div>

                      <div className="two_things" >
                        <h5>---{price}$ </h5>
                        <h5> interested: {interested.length}---</h5>
                      </div>

                      <div className="tags" > {tags.map(ele => <h4> {ele} </h4>)  } </div>
                      <div className='twee2'>
                  
                          <NavLink className= 'back2'  onClick={()=> navigate(-1) } > Go back   </NavLink> 
                           
                          { user &&  <button id='backk'  onClick={() => navigate('/Contact',  {state:{user}})  }   >Contact</button>}
                          
                          

                   </div>

                    </div>
            </div>
        </div> : 

                <div className="post_container2" >     

                <div className="post_rest2" >

                    
                 
                <div className="barabum" >
                      <h3 id='theType'  >   {type} </h3> 

                              {user && <div     className='yhhh' >
                                    <img  src={user.profile}  onClick={() => navigate('/ViewProfile',  {state:{user}})  } className = 'profile_button'  />
                                    <h5> {user.username} </h5>

                           </div>  
}
                  </div>

                  

                   
                    <h4> {title} </h4> 
                    <h5> {description} </h5>  

                    <div>

                    <div className="two_things" >
                    <h5>---{price}$ </h5>
                    <h5> interested: {interested.length}---</h5>
                    </div>

                    <div className="tags" > {tags.map(ele => <h4> {ele} </h4>)  } </div>


                    <div className='twee'>
                   
                    <NavLink className= 'back'   onClick={()=> navigate(-1) }   > Go back   </NavLink> 
                    <button  onClick={() => navigate('/Contact',  {state:{user}})  }  >Contact</button>

                    </div>
                   

                    </div>
                    </div>




                </div>

       
        
        
        
        
        }

</div>

    
  );




};

export default IndividualPostPage;