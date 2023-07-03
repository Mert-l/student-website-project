import DropDown from './DropDown';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";






const Nav = (props) => {

 const [ze_pic, setZePic] = useState('');

  const fetchProfilePic = async () => {
    try {
      const response = await axios.post("http://localhost:4000/user/getUser", {
        _id: props.user
      });

      console.log("response userrrrrrr: ", response);
      setZePic(response.data.obj.profile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfilePic();
  }, []);

console.log('zeeeeee picccc:', ze_pic)

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
      {/* {console.log('passed img:', props.user)} */}
      {/* <button className = 'profile_button'   onClick= {() => setOpenDropDown(!openDropDown)}  ></button> */}
        <img src={ze_pic}   onClick= {() => setOpenDropDown(!props.openDropDown)}  className = 'profile_button' />
      {openDropDown ? <DropDown setOpenDropDown={setOpenDropDown}  logout={props.logout}  openDropDown={openDropDown} /> : null }

      </div>


    </nav>




)


}


export default Nav;