

import axios from "axios";
import React, {useState, useEffect} from "react";

const Profile = (props) => {
  const [ user_, setUser ] = useState(null)
  const [ message, setMessage ] = useState('')

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


      const handleChange = (e) => {
        setUser({ ...user_, [e.target.name]: e.target.value });
      };


      const handleSubmit = async (e) =>{
        // e.preventDefault();
        console.log('submits')
        try{
              if(user_){
                const response = await axios.post('http://localhost:4000/user/updateAccount', user_)
                console.log(response)
                setMessage(response.data.data)
                
              }

        }catch(err){
          console.log(err);
        }

      }



  return (

      <div className= 'profile_boxxx'  >   

 {!user_ ? <h2>no info yet</h2> : <div className='profile_box' >  


    {/* <img src='https://images.pexels.com/photos/4202203/pexels-photo-4202203.jpeg?auto=compress&cs=tinysrgb&w=600' /> */}
    <form className='bio_and_stuff' onSubmit={handleSubmit} onChange={handleChange} >

    <input  placeholder='email'   name='email' value={props.user.email && props.user.email} />
    <input placeholder='username' name='username' value={user_.username && user_.username}  />
    <input placeholder='degree'  name='degree' value={user_.degree && user_.degree} />
    <input placeholder='City'  name='city' value={user_.city && user_.city}  />
    <input placeholder='Bio'  name='bio'  value={user_.bio && user_.bio} />
    <button type="submit" className= 'box_item'  >Save changes</button>
    <h3> {message} </h3>


    </form>


      






</div> } 





      </div>


  )
};

export default Profile;