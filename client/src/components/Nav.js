import DropDown from './DropDown';

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";




const Nav = (props) => {
const [openDropDown, setOpenDropDown] = useState(false)

return (

<nav  className = 'navbar' >

    

<NavLink className = 'logo_on_navbar'
        to={"/home"}>
        Student f
      </NavLink>

      <NavLink  className = 'single'
        to={"/market"}>
        Market
      </NavLink>

      <NavLink  className = 'single'
        to={"/tutoring"}>
    Tutoring
      </NavLink>

      <NavLink  className = 'single'
          to={"/rentals"}>
        Rentals
      </NavLink>


      <NavLink  className = 'single'
        to={"/social"}>
        Social
      </NavLink>

      <NavLink  className = 'single'
        to={"/addPost"}>
        Add Post
      </NavLink>

      <div>

      <button className = 'profile_button'   onClick= {() => setOpenDropDown(!openDropDown)}  ></button>

      {openDropDown ? <DropDown   logout={props.logout}  /> : null }

      </div>


    </nav>




)


}


export default Nav;