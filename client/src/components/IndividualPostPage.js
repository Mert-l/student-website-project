import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';




const IndividualPostPage = () => {

  const [idx, setIdx] = useState(0)
    const location = useLocation();
    const {title, image, createdAt, interested, price, tags, type,description } = location.state.ele;
    
console.log( 'passed object: ' , location.state)

const goBack =(type) =>{
   let str = '/' + type;
    console.log( 'strrrrrrrrrrr', str)
   return str;
}

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

                  <h3 id='theType'  >   {type} </h3>   
                  <h4> {title} </h4> 
                  <h5> {description} </h5>  

                <div>

                      <div className="two_things" >
                        <h5>---{price}$ </h5>
                        <h5> interested: {interested.length}---</h5>
                      </div>

                      <div className="tags" > {tags.map(ele => <h4> {ele} </h4>)  } </div>
                      <div className='twee2'>
                   
                          <NavLink className= 'back2'  to={goBack(type)}> Go back   </NavLink> 
                          <button id='backk' >Contact</button>

                   </div>

                    </div>
            </div>
        </div> : 

                <div className="post_container2" >     

                <div className="post_rest2" >

                    
                 
                     <h3 id='theType'  >   {type} </h3> 

                  

                   
                    <h4> {title} </h4> 
                    <h5> {description} </h5>  

                    <div>

                    <div className="two_things" >
                    <h5>---{price}$ </h5>
                    <h5> interested: {interested.length}---</h5>
                    </div>

                    <div className="tags" > {tags.map(ele => <h4> {ele} </h4>)  } </div>


                    <div className='twee'>
                   
                    <NavLink className= 'back'  to={goBack(type)}> Go back   </NavLink> 
                    <button>Contact</button>

                    </div>
                   

                    </div>
                    </div>




                </div>

       
        
        
        
        
        }

</div>

    
  );




};

export default IndividualPostPage;