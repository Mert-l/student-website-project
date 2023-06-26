import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = (props) => {


  return (

    <diV className= 'dropDownBox'>
    <nav className = 'DropDown' >


    <button>  
    <NavLink 
        to={"/profile"}>
        Profile
      </NavLink>
</button>  


<button>  <NavLink  
        to={"/settings"}>
        Settings
      </NavLink>
     </button>



     
      <button  onClick={() => props.logout() }   >Log out</button>


    </nav>

</diV>


  );
};

export default DropDown;