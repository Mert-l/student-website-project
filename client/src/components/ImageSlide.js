import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import React, { useState, useEffect } from "react";

function ImageSlide(props) {

const image = props.dat;
const formatDate = props.formatDate;
const [idx, setIdx] = useState(0)

  return (

<div className="one_post" >

<div className="slide" >
   
        {image.image.length > 1 && <button id='left' type='button' onClick={  () => idx !=0 &&  setIdx(idx-1)  } >  <AiOutlineArrowLeft className='iconss' />  </button>}

         <img  src={image.image[idx]} />

        {image.image.length > 1 && <button id='right'  type='button' onClick={ () =>  idx !=image.image.length -1 &&  setIdx(idx+1)  }  >  <AiOutlineArrowRight className='iconss' /> </button>}

</div>


<div className='post_text' >
     <h3> {image.title} </h3>
      {image.description && <h5> {image.description} </h5> }
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