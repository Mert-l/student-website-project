import ReactModalInput from "../modals/FirstModal";
import Modal from "react-modal";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
Modal.setAppElement("#root");

const Profile = (props) => {
  const [user_, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [dis, setDis] = useState(true);
  const [posts, setPosts] = useState(null);
  const [modalPosts, setModalPosts] = useState(null);

  const [open, setOpen] = useState(false);

  const letsSee = async (id) => {
    let post = posts.find((ele) => ele._id === id);
    setModalPosts(post);
  };
  const toggle = (act) => {
    setOpen((prevState) => !prevState);
    if (act === "close") {
      setModalPosts(null);
    }
  };

  useEffect(() => {
    if (modalPosts) {
      toggle();
    }
  }, [modalPosts]);

  const fetchUser = async () => {
    try {
      const response = await axios.post("http://localhost:4000/user/getUser", {
        _id: props.user._id,
      });

      console.log("response: ", response);
      setUser(response.data.obj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user_, [e.target.name]: e.target.value });
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/post/getUserPosts",
        { userId: props.user._id }
      );
      console.log("post response:", response);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submits");
    try {
      if (user_) {
        const response = await axios.post(
          "http://localhost:4000/user/updateAccount",
          user_
        );
        props.setUser_fromApp(user_);
        console.log("looooooooked for", response);
        setMessage(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="all">
      {!user_ ? (
        <h2>no info yet</h2>
      ) : (
        <div className="profile_box">
          <div className="first_half">
            <img src="https://images.pexels.com/photos/4202203/pexels-photo-4202203.jpeg?auto=compress&cs=tinysrgb&w=600" />

            <form
              className="bio_and_stuff"
              onSubmit={handleSubmit}
              onChange={handleChange}
            >
              <div className="side">
                <div className="two_shorter">
                  <input
                    placeholder="email"
                    name="email"
                    value={user_.email && user_.email}
                    disabled={dis}
                  />
                  <input
                    placeholder="username"
                    name="username"
                    value={user_.username && user_.username}
                    disabled={dis}
                  />
                </div>
                <button
                  className="modify_button"
                  onClick={() => setDis(!dis)}
                ></button>
              </div>
              <input
                placeholder="degree"
                name="degree"
                value={user_.degree && user_.degree}
                disabled={dis}
              />
              <input
                placeholder="City"
                name="city"
                value={user_.city && user_.city}
                disabled={dis}
              />
              <input
                placeholder="Bio"
                name="bio"
                value={user_.bio && user_.bio}
                disabled={dis}
              />
              <h3> {message} </h3>
            </form>
          </div>

          <div className="display_posts2">
            {!posts ? (
              <h1>no posts yet</h1>
            ) : (
              posts.map((ele) => {
                // console.log( 'osobny post: ', ele )

                return (
                  <div className="post2" onClick={() => letsSee(ele._id)}>
                    <div className="post_inside">
                      {ele.image ? <img src={ele.image} /> : null}
                      <div className="post_text">
                        <h3> {ele.title} </h3>

                        {ele.description && <h5> {ele.description} </h5>}
                        <div className="price_interested">
                          {ele.price ? <h5> {ele.price}€ </h5> : null}
                          <h5>Interested: {ele.interested.length} </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

{open && (
        <ReactModalInput fetchPosts={fetchPosts} open={open} toggle={toggle} modalPosts={modalPosts} />
      )}
    </div>
  );
};

export default Profile;