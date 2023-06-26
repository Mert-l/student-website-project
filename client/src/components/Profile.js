

import axios from "axios";
import React, {useState, useEffect} from "react";

const Profile = (props) => {


  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:4000/user/getUser')
      console.log( 'response: ' +  response)

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