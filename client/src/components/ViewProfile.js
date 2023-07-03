
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const ViewProfile = (props) => {
  

const [user, setUser] = useState(null)

    const fetchUser = async () => {
  
        try {
         
          const response = await axios.post("http://localhost:4000/user/getUser", {
            _id: props.id
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