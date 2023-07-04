
import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Images({ images }) {

  const [idx, setIdx] = useState(0)

  return (

   
   <div className="slide_" >
   
   {images.length > 1 &&  idx !=0 && <button id='left_' type='button' onClick={  () => idx !=0 &&  setIdx(idx-1)  } >  <AiOutlineArrowLeft className='iconss' />  </button>}

    <img  src={images[idx]}   />

   {images.length > 1 &&  idx !=images.length -1 && <button id='right_'  type='button' onClick={ () =>  idx !=images.length -1 &&  setIdx(idx+1)  }  >  <AiOutlineArrowRight className='iconss' /> </button>}

</div>



  
  );
}

export default Images;