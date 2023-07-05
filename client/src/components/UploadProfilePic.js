import widgetStyle from "./widgetStyle";

const UploadImages = ({ setProfilePic}) => {
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
  
    setProfilePic(images[0]);
  };
  // function to send data to server to create a new post
  return (
    <div className="flex_upload">
      {/* form to add title, description, author, date -- onchange goes to state */}
      <div className="upload">
        <button id="button_for_profile_picc" onClick={uploadWidget}>
          Choose
        </button>
      </div>
      {/* button PUBLISH POST on click take data from state and send to server on the body -- function*/}
    </div>
  );
};

export default UploadImages;