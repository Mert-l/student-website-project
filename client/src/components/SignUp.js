import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
 
 
    return (
        <div className= 'box' >
            <h2 className= 'sign_in_logo'  >Sign up</h2>

        <form className= 'container' >
            
            <input placeholder='email' className= 'box_item'  />
            <input placeholder='password' className= 'box_item' />
            <input placeholder='repeat password' className= 'box_item' />
            <button className= 'box_item'  >Sign up</button>
            

        </form>

    </div>

  );
};

export default SignUp;