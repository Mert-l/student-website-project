
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

const ViewProfile = (props) => {
  
    const location = useLocation();
    console.log(location);

        const user = location.state.user;


    return(

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




    );

  
};

export default ViewProfile;