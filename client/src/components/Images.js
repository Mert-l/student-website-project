import React from "react";

function Images({ images }) {
  return (

    <div className="img_box" >
    <div className="imagesToUpload" >
      {images.map((src) => (
        <img src={src} style={{ width: "100%" }} />
      ))}
    </div>
    </div>
  );
}

export default Images;