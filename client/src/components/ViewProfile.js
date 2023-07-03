
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

const ViewProfile = (props) => {
  
    const location = useLocation();
const [user, setUser] = useState(null)
console.log('user got with location:' , location.state.user )

    const fetchUser = async () => {
  
        try {
         
          const response = await axios.post("http://localhost:4000/user/getUser", {
            _id: location.state._id
          });
            console.log('does it even work')
          console.log("fetchet user i hope: ", response);
          setUser(response.data.obj)
        
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        fetchUser();
      }, []);




    return(

            <h1> {user} </h1>




    );

  
};

export default ViewProfile;