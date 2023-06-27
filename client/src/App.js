import Home from "./components/Home";
import Nav from './components/Nav';
import LogIn from './components/LogIn';
import Tutoring from './components/Tutoring';
import Rentals from './components/Rentals';
import Social from './components/Social';
import Marketplace from './components/Marketplace';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import DropDown from './components/DropDown';
import AddPost from './components/AddPost';
import axios from 'axios';
// import React from "react";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import * as jose from "jose";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const verify_token = async () => {
      try {
        if (!token) {
          setIsLoggedIn(false);
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.post(`http://localhost:4000/user/verify_token`);
          return response.data.ok ? login(token) : logout();
        }
      } catch (error) {
        console.log(error);
      }
    };
    verify_token();
  }, [token]);  //might have to be empty

// const isLoggeIn = (token) => {
//     let decodedToken = jose.decodeJwt(token);
//     let user = {
//       email: decodedToken.userEmail,
//     }
//      localStorage.setItem("token", JSON.)
//     localStorage.setItem('user', JSON.stringify(user)) 
// }

const login = (token) => {

  let decodedToken = jose.decodeJwt(token);
 
  let user = {
    _id: decodedToken._id,
  
  };
  setUser(user);

  localStorage.setItem("user", JSON.stringify(user));

 token && localStorage.setItem("token", JSON.stringify(token));
  setIsLoggedIn(true);

}
const logout= () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  setIsLoggedIn(false)
}


  return (


    <Router>
        
         {isLoggedIn ? <Nav  logout={logout}  /> : <h1 className ='sign_in_logo' >Student forum</h1>  }
         
       <Routes>
       <Route path='/'  element={isLoggedIn ?  <Navigate to={'/Home'}/> : <Navigate to={'/LogIn'}/> }  />
         <Route path="/home"    element={!isLoggedIn ? <Navigate to="/LogIn" /> : <Home />}  />
         {/* <Route path="/marketplace" element={<Marketplace />} />
         <Route path="/tutoring" element={<Tutoring />} />
         <Route path="/rentals" element={<Rentals />} />
         <Route path="/social" element={<Social />} /> */}
         <Route path="/login" element={isLoggedIn ? <Navigate to='/Home'/> : <LogIn  login={login} /> } />
         <Route path="/register" element={<SignUp />} />  
         {/* <Route path="/addPost" element={<AddPost   user={user} />} /> */}
         <Route path="/addPost"    element={!isLoggedIn ? <Navigate to="/LogIn" /> : <AddPost user={user} />}  /> 
         
         <Route path="/profile" element={<Profile  user={user} setUser_fromApp={setUser}  />} />             

  
       </Routes>


     </Router>



  

  );
}

export default App;
