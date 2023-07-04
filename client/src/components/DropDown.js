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
              className='bar_link'
                  to={"/profile"}>
                  Profile
                </NavLink>
        
            



              
                <h4 className='bar_link'  onClick={() => props.logout() } >Log out</h4>

        </div>
    </nav>

</div>


  );
};

export default DropDown;