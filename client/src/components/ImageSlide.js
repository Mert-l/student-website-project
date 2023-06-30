
import React, { useState, useEffect } from "react";

function ImageSlide(props) {

const images = props.arr;
const [idx, setIdx] = useState(0)

  return (
    <div className="slide" >
        
        

        
            {images.length > 1 && <button id='left' type='button' onClick={  () => idx !=0 &&  setIdx(idx-1)  } > l </button>}

    <img  src={images[idx]} />

            {images.length > 1 && <button id='right'  type='button' onClick={ () =>  idx !=images.length -1 &&  setIdx(idx+1)  }  > r </button>}




    </div>
  )
}

export default ImageSlide