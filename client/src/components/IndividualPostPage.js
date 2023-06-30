import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom';






const IndividualPostPage = () => {

 
    const location = useLocation();
    const {title, image, createdAt, interested, price, tags, type,description } = location.state.ele;
    
console.log( 'passed object: ' , location.state)

    return (
  <div>

          {image.length > 0 ? 
        
            <div className='post_container' >

            <div className="slides_maybe" >

                <img src={image[0]}></img>

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
                      <button>Contact</button>

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
                    <button>Contact</button>

                    </div>
                    </div>




                </div>

       
        
        
        
        
        }

</div>

    
  );




};

export default IndividualPostPage;