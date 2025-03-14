import ReactModalInput from "../modals/FirstModal";
import ImageSlide from "./ImageSlide";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import UploadProfilePic from "./UploadProfilePic";
import Images from "./Images";
import {URL} from '../config.js'
Modal.setAppElement("#root");






const Profile = (props) => {
  const [user_, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [dis, setDis] = useState(true);
  const [posts, setPosts] = useState(null);
  const [modalPosts, setModalPosts] = useState(null);
  const [profilePic, setProfilePic] = useState('')

  const navigate = useNavigate();
  const image = props.dat;

  const [idx, setIdx] = useState(0)

  const [open, setOpen] = useState(false);



  const letsSee = async (id) => {
    let post = posts.find((ele) => ele._id === id);
    setModalPosts(post);
  };
  const toggle = (act) => {
    setOpen((prevState) => !prevState);
    if (act === "close") {
      setModalPosts(null);
    }
  };

  useEffect(() => {
    if (modalPosts) {
      toggle();
    }
  }, [modalPosts]);

  const fetchUser = async () => {
    try {
      const response = await axios.post(`${URL}/user/getUser`, {
        _id: props.user._id,
      });

 
      setUser(response.data.obj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  const formatDate =(date) =>{

    let sliced = date.slice(0, 10).split('-').join(', ');
    let differ = (new Date() - new Date(sliced)) / 1000 / 60 / 60 / 24 ;
    let diff = Math.round(differ)
    if(diff <= 1){
      return 'posted today'
    }
    else if(diff> 1){
      return `posted ${diff} days ago`
    }
    else if(diff > 30){
      return `posted more that 1 month agp`
    }
  
  
  
  
  }


const tryProfilePic = () => {

try{
  setUser({...user_, profile: profilePic} )

}catch(err){
  console.log(err)
}

}


  const handleChange = (e) => {
    setUser({ ...user_, [e.target.name]: e.target.value });
   
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.post(
        `${URL}/post/getUserPosts`,
        { userId: props.user._id }
      );
 
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      
      if (user_) {
        const response = await axios.post(
          `${URL}/user/updateAccount`,
          user_
        );
      
        props.setUser_fromApp(response.data.updated_user );
        console.log(response)
        setMessage(response.data.data);
        // setTimeout(props.logout(), 5000);
        // setTimeout(navigate('/logIn'), 5000);
        // props.logout()
        

      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    tryProfilePic();
  }, [profilePic]);

  return (
    <div className="all">
      {!user_ ? (
        <h2>no info yet</h2>
      ) : (
        <div className="profile_box">
          <div className="first_half3">
          <div className="pic_stuff3" >
        {user_.profile && <img  src={user_.profile} />}

        <div className='to_tings' >  
        <UploadProfilePic setProfilePic={setProfilePic} />
       {/* <button className="button_for_profile_pic"  onClick={tryProfilePic} >apply</button> */}
       </div>
       
      </div>

            <form
              className="bio_and_stuff"
              onSubmit={handleSubmit}
              onChange={handleChange}
            >
              <div className="side">
                <div className="two_shorter">
                  <input
                    placeholder="email"
                    name="email"
                    value={user_.email && user_.email}
                    disabled={dis}
                  />
                  <input
                    placeholder="username"
                    name="username"
                    value={user_.username && user_.username}
                    disabled={dis}
                  />
                </div>
                

               

                < AiFillEdit className="mod_icon" onClick={() => setDis(!dis)   } />


              </div>
              <input
                placeholder="degree"
                name="degree"
                value={user_.degree && user_.degree}
                disabled={dis}
              />
              <input
                placeholder="City"
                name="city"
                value={user_.city && user_.city}
                disabled={dis}
              />
              <textarea
                placeholder="Bio"
                name="bio"
                id='bio_b'
                value={user_.bio && user_.bio}
                disabled={dis}
              />
                <button className="button_for_profile_pic2"  >submit?</button>

              <h3 id='o' > {message} </h3>
            </form>
          </div>

          <div className="display_posts2">
          {
    !posts ? 

    <h1>no posts yet</h1> :  posts.map(ele => {

      return(
    
      <div className = 'post'  >

        {ele.image.length >0 ? 
        
        <div className="one_post" >

        <div className="slide" >
           
                {ele.image.length > 1 && <button id='left' type='button' onClick={  () => idx !=0 &&  setIdx(idx-1)  } >  <AiOutlineArrowLeft className='iconss' />  </button>}
        
                 <img  src={ele.image[idx]}   onClick={() => letsSee(ele._id)} />
        
                {ele.image.length > 1 && <button id='right'  type='button' onClick={ () =>  idx !=ele.image.length -1 &&  setIdx(idx+1)  }  >  <AiOutlineArrowRight className='iconss' /> </button>}
        
        </div>
        
        
        <div className='post_text'   onClick={() => letsSee(ele._id)} >
             <h3> {ele.title} </h3>
              {ele.description && <h5> {ele.description.substring(0, 130) + '. . .' } </h5> }
               <div  className='price_interested'>
                {ele.price ? <h5> {ele.price}€ </h5> : null }
                <h5>Interested: {ele.interested.length}  </h5>
                <h5>  {  formatDate(ele.createdAt)   }  </h5>
            </div>
        </div>
        
        
        
        
        </div>

        

        

          : 
        
              

<div className='post_text' onClick={() => letsSee(ele._id)}  >
         <h3> {ele.title} </h3>
         
          {ele.description.length > 140 ? <h5> {ele.description.substring(0, 140) + '. . .'} </h5> :  <h5> {ele.description} </h5>  }
           <div  className='price_interested'>
            {ele.price ? <h5> {ele.price}€ </h5> : null }
            <h5>Interested: {ele.interested.length}  </h5>
            <h5>  {  formatDate(ele.createdAt)   }  </h5>
        </div>
    </div>


            

      
      
      }



      </div>
    
      )
    
    })}
          </div>
        </div>
      )}

{open && (
        <ReactModalInput fetchPosts={fetchPosts} open={open} toggle={toggle} modalPosts={modalPosts} />
      )}
    </div>
  );
};

export default Profile;