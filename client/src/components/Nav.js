import DropDown from './DropDown';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {URL} from '../config.js'





const Nav = (props) => {

 const [ze_pic, setZePic] = useState('');

  const fetchProfilePic = async () => {
    try {
      const response = await axios.post(`${URL}/user/getUser`, {
        _id: props.user
      });

     
      setZePic(response.data.obj.profile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfilePic();
  }, []);



const [openDropDown, setOpenDropDown] = useState(false)

return (

<nav  className = 'navbar' >

  
<NavLink className = 'logo_on_navbar'
        to={"/home"}>
        Student forum
      </NavLink>

      {/* <NavLink  className = 'single'
        to={"/market"}>
        Trade
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
      </NavLink> */}

      <NavLink  className = 'single'
        to={"/addPost"}>
        Add Post
      </NavLink>

      <div>
    
        <img src={ze_pic}   onClick= {() => setOpenDropDown(!props.openDropDown)}  className = 'profile_button_nav' />
      {openDropDown ? <DropDown setOpenDropDown={setOpenDropDown}  logout={props.logout}  openDropDown={openDropDown} /> : null }

      </div>


    </nav>




)


}


export default Nav;