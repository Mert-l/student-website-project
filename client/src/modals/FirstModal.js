import Modal from "react-modal";
import { FaInfoCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

function ReactModalInfo({ open, toggle, modalPosts, fetchPosts }) {
  const navigate = useNavigate();
  const [dis, setDis] = useState(true);
  const [updateForm, setUpdateForm] = useState({ ...modalPosts });

  const handleChange = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };

const delete_post = async () => {
    
        console.log('triggersd delete function')
try{

const response = await axios.post("http://localhost:4000/post/deletePost", {
        updateForm });
        console.log(  'deleted:   ' ,  response);
      fetchPosts()
      toggle("close")


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
      fetchPosts()
      toggle("close")
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
         // className="myModal"
          className='post_container4'
        >

{/* 
          <div className="two_btns" >
           
            <button
              onClick={() => toggle("React-Modal-Info")}
              className="close info"
            >
              x
            </button>
       
            <button
              className="submit ok"
              onClick={() => toggle("React-Modal-Info")}
            >
              Confirm
            </button>
          </div> */}


          <div className="container_post_updating">
        

         
            
              <form
                className="features4"
                onSubmit={handleSubmit}
                onChange={handleChange}
              >

<div className="two_btns_modal" >
           
           <button
             onClick={() => toggle("React-Modal-Info")}
             className="close info"
           >
             x
           </button>
      
           <button
             className="submit ok"
             onClick={handleSubmit}
           >
             Confirm
           </button>
         </div>

              
                <input
                  placeholder="title"
                  name="title"
                  value={updateForm.title && updateForm.title}
                  disabled={dis}
                />

                <input
                  placeholder="description"
                  name="description"
                  id='bio_input'
                  value={updateForm.description && updateForm.description}
                  disabled={dis}
                />

                <input
                  placeholder="price"
                  name="price"
                  value={updateForm.price && updateForm.price}
                  disabled={dis}
                />

                 
            
              </form>

             
              
            </div>

  <div className='del_save' >
  <button className="" onClick={() => setDis(!dis)}>
              Modify
            </button>
                    <button onClick={delete_post}   >delete post</button>
              </div>

    
          

        </Modal>
      )}
    </>


  );
}

export default ReactModalInfo;