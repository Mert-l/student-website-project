import React from "react";

function Images({ images }) {
  return (
    <>
      {images.map((src) => (
        <img src={src} style={{ width: "100%" }} />
      ))}
    </>
  );
}

export default Images;