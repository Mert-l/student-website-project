import Modal from "react-modal";
import { FaInfoCircle } from "react-icons/fa";

// You need to set Modal to the same element you serve your react to (id of the root element of the app)
Modal.setAppElement("#root");

function ReactModalInfo({ open, toggle, passed_post }) {
  return (
    <Modal
      isOpen={open["React-Modal-Info"]}
      onRequestClose={() => toggle("React-Modal-Info")}
      contentLabel="Info"
      className="myModal"
    >
      <div className="modal info">
        {/* <FaInfoCircle size="2rem" /> */}
{/* <p>delete or update     {passed_post.title}     </p> */}
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

          <input placeholder='image'  name='image' /> 
                <input placeholder='title'  name='title' /> 
                <input placeholder='description'  name='description' />
                <input placeholder='price' name='price'  /> 




    </Modal>
  );
}

export default ReactModalInfo;