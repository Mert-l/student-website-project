

import React from "react";
import { NavLink } from "react-router-dom";





const Nav = () => {


return (

<nav  className = 'navbar' >

    

<NavLink className = 'logo_on_navbar'
        to={"/home"}>
        Student f
      </NavLink>

      <NavLink  className = 'single'
        to={"/marketplace"}>
        Market
      </NavLink>

      <NavLink  className = 'single'
        to={"/tutoring"}>
    Tutoring
      </NavLink>

      <NavLink  className = 'single'
          to={"/rent"}>
        Rentals
      </NavLink>


      <NavLink  className = 'single'
        to={"/social"}>
        Social
      </NavLink>

      <button className = 'profile_button'> </button>


    </nav>




)


}


export default Nav;