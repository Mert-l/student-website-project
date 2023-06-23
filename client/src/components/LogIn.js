import React from "react";
import { NavLink } from "react-router-dom";

const LogedIn = () => {
 
 
    return (
        <div className= 'box' >
            <h2 className= 'sign_in_logo'  >Sign in</h2>

        <form className= 'container' >
        <div className= 'three' >
            <input placeholder='email' className= 'box_item'  />
            <input placeholder='password' className= 'box_item' />
            {/* <h4>Forgot password?</h4> */}
        </div>
            <button className= 'box_item'  >Log in</button>
            <NavLink  className= 'box_item2'  to={'/register'}> Create an account    </NavLink> 


        </form>

    </div>

  );
};

export default LogedIn;