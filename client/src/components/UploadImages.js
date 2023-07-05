import widgetStyle from "./widgetStyle";

const UploadImages = ({ setPost}) => {
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "dgqps35nt",
        upload_preset: "rv8pokux",
        tags: ["user"],
        stylesheet: widgetStyle,
      },
      (error, result) => {
        if (error) {
       
        } else {
          result.event === "queues-end" && set_picture(result);
         
        }
      }
    );
  };

  const set_picture = async (result) => {
    let images = result.info.files.map((file) => file.uploadInfo.url);
  
    setPost((prevState) => ({ ...prevState, image: images }));
  };
  
  return (
    <div className="flex_upload">
    
      <div className="upload">
        <button className="button" onClick={uploadWidget}>
          Open widget
        </button>
      </div>
   
    </div>
  );
};

export default UploadImages;