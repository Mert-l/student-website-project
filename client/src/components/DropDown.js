import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';


const DropDown = (props) => {



  return (

    <div className= 'dropDownBox'>
    <nav className = 'DropDown' >

      <div className="bar_items" >


             {/* <button onClick={props.setOpenDropDown(false)} >  < AiOutlineArrowLeft   /> </button> */}
               < AiOutlineArrowLeft onClick={()=> props.setOpenDropDown(false)  }  /> 
               
              <NavLink 
                  to={"/profile"}>
                  Profile
                </NavLink>
          


            <NavLink  
                  to={"/settings"}>
                  Settings
                </NavLink>
            



              
                <h3  onClick={() => props.logout() } >Log out</h3>

        </div>
    </nav>

</div>


  );
};

export default DropDown;