import React, { Component } from "react";


class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgqps35nt',
        uploadPreset: 'rv8pokux'
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          
          this.props.setPic(result.info.url)
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="upload_pic">
        +
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
