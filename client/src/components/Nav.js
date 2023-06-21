

import React from "react";
import { NavLink } from "react-router-dom";





const Nav = () => {


return (

<div  className = 'navbar' >

    

<NavLink className = 'single'
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


    </div>




)


}


export default Nav;