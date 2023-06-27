

import axios from "axios";
import React, {useState, useEffect} from "react";

const Profile = (props) => {
  const [ user_, setUser ] = useState(null)
  const [ message, setMessage ] = useState('')
  const [dis, setDis] = useState(true)

  const fetchUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/getUser',{_id: props.user._id})
      
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
       e.preventDefault();
        console.log('submits')
        try{
              if(user_){
                const response = await axios.post('http://localhost:4000/user/updateAccount', user_)
                props.setUser_fromApp(user_)
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
    <button onClick={ () => setDis(!dis) }  ></button>
    <input  placeholder='email'   name='email' value={user_.email && user_.email} disabled={dis}  />
    <input placeholder='username' name='username' value={user_.username && user_.username} disabled={dis} />
    <input placeholder='degree'  name='degree' value={user_.degree && user_.degree}  disabled={dis} />
    <input placeholder='City'  name='city' value={user_.city && user_.city}  disabled={dis}  />
    <input placeholder='Bio'  name='bio'  value={user_.bio && user_.bio} disabled={dis} />
   
    <h3> {message} </h3>
    </form>
 {/* <button   type="submit" className= 'box_item'  >Save changes</button> */}



      






</div> } 





      </div>


  )
};

export default Profile;