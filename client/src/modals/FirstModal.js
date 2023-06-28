import Modal from "react-modal";
import { FaInfoCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";

Modal.setAppElement("#root");

function ReactModalInfo({ open, toggle, modalPosts }) {
  const [dis, setDis] = useState(true);
  const [updateForm, setUpdateForm] = useState({ ...modalPosts });

  const handleChange = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };

const delete_post = async () => {
    
        console.log('triggersd delete function')
try{

const response = await axios.delete("http://localhost:4000/post/deletePost", {
        updateForm });
        console.log(  'deleted:   ' ,  response);


} catch(err)  {

     console.log(  "the current errr:  " , err);

}

}


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submits");
    try {
      
      const response = await axios.post(
        "http://localhost:4000/post/updatePost",
        updateForm
      );
      console.log("maybe updated: ", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {modalPosts && (
        <Modal
          isOpen={open}
          onRequestClose={() => toggle("close")}
          contentLabel="Info"
          className="myModal"
        >
          <div>
            <p>delete or update {updateForm.title} </p>
            <button
              onClick={() => toggle("React-Modal-Info")}
              className="close info"
            >
              x
            </button>
          </div>
          <div>
            <button
              className="submit ok"
              onClick={() => toggle("React-Modal-Info")}
            >
              Confirm
            </button>
          </div>

          <div className="container_post_creating">
            <button className="" onClick={() => setDis(!dis)}>
              Modify
            </button>

            <div className="features">
              <div className="types">
                <button>sell</button>
                <button>tutoring</button>
                <button>rentals</button>
                <button>social</button>
              </div>
              <form
                classNmae="features"
                onSubmit={handleSubmit}
                onChange={handleChange}
              >
                <input
                  placeholder="image"
                  name="image"
                  value={updateForm.image && updateForm.image}
                  disabled={dis}
                />
                <input
                  placeholder="title"
                  name="title"
                  value={updateForm.title && updateForm.title}
                  disabled={dis}
                />
                <input
                  placeholder="description"
                  name="description"
                  value={updateForm.description && updateForm.description}
                  disabled={dis}
                />
                <input
                  placeholder="price"
                  name="price"
                  value={updateForm.price && updateForm.price}
                  disabled={dis}
                />

                <div className="two_buttons">
                  <button>save</button>
                
                </div>
              </form>
                <button onClick={delete_post}  >delete post</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ReactModalInfo;