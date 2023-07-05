
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import URL from '../config.js'



import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";






const Contact = (props) => {
    const navigate = useNavigate();

    const location = useLocation();

        const[mess, setMess] = useState('')
    const op = location.state.user;
  
     const [contactForm, setContactForm] = useState({
        subject: '',
        text: ''
         
     })

     const[currentUser, setCurrentUser] = useState(null);



const fetchUser = async () => {
    try {
       
      const response = await axios.post(`${URL}/user/getUser`, {
        _id: props.userId,
      });

   
      setCurrentUser(response.data.obj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);




     const handleChange = (e) => {
        if (e.target.name !== "tags")
          setContactForm({ ...contactForm, [e.target.name]: e.target.value });
      };
   

      const handleSubmit = async (e) => {
        e.preventDefault()

        if(props.userId){

 try {
        
          const response = await axios.post("http://localhost:4000/contact/send_email", {
            from: currentUser.email,
            to: op.email,
            subject: contactForm.subject,
            text: contactForm.text
          });
          
         setMess(response.data.message)
      
        
        
        } catch (err) {
          console.log(err);
        }

        }

       
        
      };

      





    return (
  

     
        
            <div className='post_container_contact' >



            <h3 className="contact_person"  >Contact {op.username} </h3>

            <form className="c_form"  onChange={handleChange}  onSubmit={handleSubmit}  >

           <h4>Title:</h4>
           <input name='subject'   ></input>

           <h4>Message:</h4>
           {/* <input id='c_message'  name='text' ></input> */}
            <textarea  id='c_message'  name='text'   />

<div className="dasf" >
            <button  onClick={()=> navigate(-1) } type='button'  >Back</button>
           <button  id='theOne' type='Submit'  >Send</button>
</div>

           <h4  id='dip' > {mess} </h4>

            </form>

</div>

    
  );




};

export default Contact;