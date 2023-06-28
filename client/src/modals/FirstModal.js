import Modal from "react-modal";
import { FaInfoCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";


Modal.setAppElement("#root");

function ReactModalInfo({ open, toggle, passed_post }) {

    const [dis, setDis] = useState(true);

    const [ post, setPost ] = useState(passed_post);

    const handleChange = (e) => {
		setPost({ ...post, [e.target.name]: e.target.value });
	};

    console.log('passed post: ',  passed_post )

        
  const handleSubmit = async (e) => {
    //debugger
    e.preventDefault();
    console.log("submits");
    try {
debugger
        const response = await axios.post("http://localhost:4000/post/updatePost", post);
        console.log(  'maybe updated: ' , response)
            
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
      {passed_post && (
        <Modal
          isOpen={open}
          onRequestClose={() => toggle("close")}
          contentLabel="Info"
          className="myModal"
        >


          <p>{passed_post._id}</p>
          <div >
            <p>delete or update {passed_post.title} </p>
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

          

          <div  className='container_post_creating' >  

          <button className=''    onClick={() => setDis(!dis)}  >  Modify  </button>
      
      <div className='features' >

            <div  className='types' >
                <button>sell</button>
                <button>tutoring</button>
                <button>rentals</button>
                <button>social</button>

            </div>
            <form classNmae='features' onSubmit={handleSubmit} onChange={handleChange}   >
             

          
                <input placeholder='image'  name='image'  value={post.image && post.image}  disabled={dis}  /> 
                <input placeholder='title'  name='title'   value={post.title && post.title} disabled={dis} /> 
                <input placeholder='description'  name='description'   value={post.description && post.description} disabled={dis} />
                <input placeholder='price' name='price'  value={post.price && post.price}  disabled={dis} /> 

                    <div className='two_buttons' >
                        
                        <button>save</button>

                    </div>
            </form>

      </div>







    </div>

          
            



        </Modal>
      )}
    </>
  );
}

export default ReactModalInfo;