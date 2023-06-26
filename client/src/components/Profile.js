

import axios from "axios";
import React, {useState, useEffect} from "react";

const Profile = (props) => {


  const fetchUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/getUser',{email: props.user.email})
      const data = await response.json();
      console.log( 'response: ' +  data)

    } catch (error) {
      console.log(error);
    }
  }
  
  
    useEffect(() => {
    fetchUser()
      }, []);



  return (

<h1> ble</h1>
  )
};

export default Profile;