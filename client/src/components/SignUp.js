import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useState} from 'react';


const SignUp = () => {
 
    const [ form, setValues ] = useState({
		email: '',
		password: '',
		password_repeat: '',
        city: ''
	});
 
// const [ message, setMessage ] = useState('');

    const handleChange = (e) => {
		setValues({ ...form, [e.target.name]: e.target.value });
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            debugger
           
            const response = await axios.post('http://localhost:4000/user/register', {
                email: form.email,
                password: form.password,
                password_repeat: form.password_repeat,
                city: form.city
            });
         

        } catch(err){
            console.log(err);
        }

    }


    return (
        <div className= 'box' >
            <h2 className= 'sign_in_logo'  >Sign up</h2>

        <form className= 'container' onSubmit={handleSubmit} onChange={handleChange}  >
            
            <input placeholder='email' className= 'box_item' name='email' />
            <input placeholder='password' className= 'box_item' name='password' />
            <input placeholder='repeat password' className= 'box_item' name= 'password_repeat' />
            <input placeholder='city' className= 'box_item' name= 'city' />
            <button type="submit" className= 'box_item'  >Sign up</button>
            

        </form>

    </div>

  );
};

export default SignUp;