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
import IndividualPostPage from './components/IndividualPostPage';
import ViewProfile from './components/ViewProfile';
import Contact from './components/Contact';
import axios from 'axios';
// import React from "react";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import * as jose from "jose";
import { useNavigate } from "react-router-dom";
import LogedIn from "./components/LogIn";



function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  console.log('lets see intial:', user)

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
  console.log('decoded tokennnnnn:' , decodedToken)
 
  let user = {
    _id: decodedToken._id,
      city: decodedToken.city
  
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
        
         {isLoggedIn ? <Nav  logout={logout}  user={user} /> : <h1 className ='logo' >Student forum</h1>  }
         
       <Routes>
       <Route path='/'  element={isLoggedIn ?  <Navigate to={'/Home'}/> : <Navigate to={'/LogIn'}/> }  />
        

     {user && (
          <>
           <Route path="/home"    element={!isLoggedIn ? <Navigate to="/LogIn" /> : <Home  city= { user.city}  />}  />
            <Route path="/rentals" element={<Rentals city={user.city} />} />
            <Route path="/tutoring" element={<Tutoring city={user.city} />} />
            <Route path="/social" element={<Social city={user.city} />} />{" "}
          </>
        )}
    
         <Route path="/login" element={isLoggedIn ? <Navigate to='/Home'/> : <LogIn  login={login} /> } />
         <Route path="/register" element={<SignUp />} />  
         
       {isLoggedIn? 
       
      <>
      
      <Route path="/addPost"    element={!isLoggedIn ? <Navigate to="/LogIn" /> : <AddPost user={user} />}  /> 
         
         <Route path="/profile" element={<Profile  user={user} logout={logout} setUser_fromApp={setUser}  />} />  
         <Route path="/IndividualPostPage" element={<IndividualPostPage   />} />       
         <Route path="/ViewProfile" element={<ViewProfile   />} />      
         <Route path="/Contact" element={<Contact   userId={user}   />}  />  
      
      
      
      </> :

<Route path="/login" element={isLoggedIn ? <Navigate to='/Home'/> : <LogIn  login={login} /> } />
      
      
      
      }
         
      
       </Routes>


     </Router>



  

  );
}

export default App;
