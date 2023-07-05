import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const DropDown = (props) => {
  const navigate = useNavigate(); 

const leave = () => {

  props.logout();
  navigate('/logIn')
}


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
        
            



              
                <h4 className='bar_link'  onClick={() => leave() } >Log out</h4>

        </div>
    </nav>

</div>


  );
};

export default DropDown;