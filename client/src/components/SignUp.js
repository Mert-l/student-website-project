import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {URL} from '../config.js'


const SignUp = () => {

 const navigate=useNavigate()

    const [ form, setValues ] = useState({
		email: '',
		password: '',
		password_repeat: '',
        city: '',
        username: ''
	});
 
 const [ message, setMessage ] = useState('');

    const handleChange = (e) => {
		setValues({ ...form, [e.target.name]: e.target.value });
	};

    const handleSubmit = async (e) => {
       
        e.preventDefault();
        try{
            
           
            const response = await axios.post(`${URL}/user/register`, {
                email: form.email,
                password: form.password,
                password_repeat: form.password_repeat,
                city: form.city,
                username: form.username
            });

            setMessage(response.data.data);
			if (response.data.ok) {
				setTimeout(() => {
					
                    navigate('/login');
				}, 3000);
			}

         

        } catch(err){
            
        }

    }


    return (
        <div className= 'box' >
            <h2 className= 'sign_in_logo'  >Sign up</h2>

        <form className= 'container2' onSubmit={handleSubmit} onChange={handleChange}  >
            
            <input placeholder='email' className= 'box_item' name='email'  required />
            <input placeholder='password' type='password' className= 'box_item' name='password' />
            <input placeholder='repeat password' className= 'box_item' name= 'password_repeat' />
            <input placeholder='username' className= 'box_item' name= 'username' />
            <input placeholder='city' className= 'box_item' name= 'city' />
            <button type="submit" className= 'box_item'  >Sign up</button>
            <h5 className= 'box_item' >{message}</h5>
            <NavLink  className= 'box_item2'  to={'/logIn'}> Go back   </NavLink> 
            

        </form>

    </div>

  );
};

export default SignUp;