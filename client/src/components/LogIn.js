import React from "react";
import { NavLink } from "react-router-dom";
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
//import {URL} from '../config.js'
import { URL } from '../config.js';


const LogedIn = (props) => {
   // const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [form, setValues] = useState({
        email: "",
        password: "",
      });
    

  
 
    const handleChange = (e) => {
        setValues({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
try{      

    const response = await axios.post(`${URL}/user/logIn`, {
        email: form.email.toLowerCase(),
        password: form.password,
      });
      setMessage(response.data.data);
      if(response.data.ok) {
        //let decodedToken = jose.decodeJwt(response.data.token);
           
          
            setTimeout( () => {
                props.login(response.data.token)
            }, 1500 )

      } else{
        console.log(response.data.data)
      }

    //   setTimeout(() => {
    //     props.login(response.data.token);
    //     navigate("/");
    //   }, 2000);      

} catch(err){
  console.log("-----------jjjjj")
    console.log(err);
}

      }

 
    return (
        <div className= 'box' >
            <h2 className= 'sign_in_logo'  >Sign in</h2>

        <form className= 'container' onSubmit = {handleSubmit} onChange={handleChange} >

        <div className= 'two' >
            <h4  id='e'  >Email:</h4>
            <input placeholder='email' className= 'box_item' name= 'email' />
           {/* <h4>Forgot password?</h4> */}
        </div>

        <div className= 'two' >
            <h4>Password:</h4>
            <input placeholder='password' className= 'box_item' name = 'password'  type='password' />
        </div>
            
         <button id= 'container_login_button' >Continue</button>   
            
         <h4 id='z'   >{message}</h4>
            <NavLink  className= 'box_item2'  to={'/register'}> Create an account    </NavLink> 
   
            

        </form>

    </div>

  );
};

export default LogedIn;