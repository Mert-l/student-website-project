import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {URL} from '../config.js'
function ImageSlideNoImages (props) {
  const navigate = useNavigate();
const image = props.dat;
const formatDate = props.formatDate;
const [idx, setIdx] = useState(0)


const [ze_pic, setZePic] = useState('');
const[userName, setUserName] = useState('')

const fetchProfilePic = async () => {
  
  try {
   
    const response = await axios.post(`${URL}/user/getUser`, {
      _id: image.userId
    });
  
    setZePic(response.data.obj.profile);
    setUserName(response.data.obj.username)
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchProfilePic();
}, []);




  return (

<div className="one_post_for_no_img" >

{/* <div className="slide" >
   
        {image.image.length > 1 && <button id='left' type='button' onClick={  () => idx !=0 &&  setIdx(idx-1)  } >  <AiOutlineArrowLeft className='iconss' />  </button>}

         <img  src={image.image[idx]}    onClick={() =>
          navigate("/IndividualPostPage", { state: { ele: image } })
        }  />

        {image.image.length > 1 && <button id='right'  type='button' onClick={ () =>  idx !=image.image.length -1 &&  setIdx(idx+1)  }  >  <AiOutlineArrowRight className='iconss' /> </button>}

</div> */}


<div className='post_text_no_img'    onClick={() =>
          navigate("/IndividualPostPage", { state: { ele: image } })
        }  >

        <div className='yahh' >  
             
             {image.price ? <h5> {image.price}€ </h5> : null }
             <div className='yhh' >
                <img  src={ze_pic}   className = 'profile_button'  />
                <h5> {userName} </h5>

             </div>
             
        </div>

      {image.description && <h5> {image.description.length > 400 ?  image.description.substring(0, 400) + '. . .' : image.description   } </h5> }
       <div  className='price_interested'>
        <h3> {image.title} </h3>
        <h5>Interested: {image.interested.length}  </h5>
        <h5>  {  formatDate(image.createdAt)   }  </h5>
    </div>
</div>




</div>

  )
}

export default ImageSlideNoImages;