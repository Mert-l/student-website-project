import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ImageSlide(props) {
  const navigate = useNavigate();
const image = props.dat;
const formatDate = props.formatDate;
const [idx, setIdx] = useState(0)

console.log('what is imageee', image)
const [ze_pic, setZePic] = useState('');
const[userName, setUserName] = useState('')

const fetchProfilePic = async () => {
  
  try {
   
    const response = await axios.post("http://localhost:4000/user/getUser", {
      _id: image.userId
    });
      console.log('does it even work')
    console.log("response from fetching pic?: ", response);
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

<div className="one_post" >

<div className="slide" >
   
        {image.image.length > 1 && idx != 0 && <button id='left' type='button' onClick={  () => idx !=0 &&  setIdx(idx-1)  } >  <AiOutlineArrowLeft className='iconss' />  </button>}

         <img  src={image.image[idx]}    onClick={() =>
          navigate("/IndividualPostPage", { state: { ele: image } })
        }  />

        {image.image.length > 1 &&  idx !=image.image.length -1 && <button id='right'  type='button' onClick={ () =>  idx !=image.image.length -1 &&  setIdx(idx+1)  }  >  <AiOutlineArrowRight className='iconss' /> </button>}

</div>


<div className='post_text'    onClick={() =>
          navigate("/IndividualPostPage", { state: { ele: image } })
        }  >

        <div className='yahh' >  
             <h3> {image.title} </h3>
             <div className='yhh' >
                <img  src={ze_pic}   className = 'profile_button'  />
                <h5> {userName} </h5>

             </div>
             
        </div>

      {image.description && <h5> {image.description.substring(0, 130) + '. . .' } </h5> }
       <div  className='price_interested'>
        {image.price ? <h5> {image.price}€ </h5> : null }
        <h5>Interested: {image.interested.length}  </h5>
        <h5>  {  formatDate(image.createdAt)   }  </h5>
    </div>
</div>




</div>

  )
}

export default ImageSlide