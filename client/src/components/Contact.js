
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom';




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";






const Contact = (props) => {

    const location = useLocation();
    console.log( 'locationnnn', location.state);

        // const user = location.state.user;
  
     const [contactForm, setContactForm] = useState({
        subject: '',
        text: ''
         
     })

// console.log('is that the thing:'  , user)




     const handleChange = (e) => {
        if (e.target.name !== "tags")
          setContactForm({ ...contactForm, [e.target.name]: e.target.value });
      };
   

      const handleSubmit = async (e) => {
      
        try {
         
          const response = await axios.post("http://localhost:4000/contact/send_email", {
            from: '',
            to: '',
            subject: contactForm.subject,
            text: contactForm.text
          });
          
         
          console.log("post response:", response);
        } catch (err) {
          console.log(err);
        }
        
      };





    return (
  

     
        
            <div className='post_container_contact' >



            <h3>Contact the person</h3>

            <form onChange={handleChange}  onSubmit={handleSubmit}  >

           <h4>Title:</h4>
           <input name='subject' ></input>

           <h4>Message:</h4>
           <input name='text' ></input>


           <button type='Submit'  >Send</button>

            </form>

</div>

    
  );




};

export default Contact;