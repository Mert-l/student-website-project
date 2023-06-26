

import axios from "axios";
import React, {useState, useEffect} from "react";

const Profile = (props) => {
  const [user_, setUser] = useState('');

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

      <div className= 'profile_box' >   

<h1> {!user_ ? <h2>no info yet</h2> : <div className='profile_container' >  

<div className='first_half' > 
    {/* <img src='./images/download.jpg'/ > */}
    <h1>Image</h1>
    <div className='bio_and_stuff'  >

      <h3> {user_.username} </h3>
      <h3> {user_.city} </h3>
      <h3> {user_.description}</h3>



    </div>


 </div>      






</div> } </h1>





      </div>


  )
};

export default Profile;