

import axios from "axios";
import React, {useState, useEffect} from "react";

const Profile = (props) => {
  const [user_, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/getUser',{email: props.user.email})
      
      console.log( 'response: ' ,  response)
      setUser(response.data.obj)

    } catch (error) {
      console.log(error);
    }
  }
  
  
    useEffect(() => {
    fetchUser()
      }, []);



  return (

<h1> {user_.city} </h1>
  )
};

export default Profile;