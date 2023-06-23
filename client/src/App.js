import Home from "./components/Home";
import Nav from './components/Nav';
import LogIn from './components/LogIn';
import Tutoring from './components/Tutoring';
import Rentals from './components/Rentals';
import Social from './components/Social';
import Marketplace from './components/Marketplace';
import SignUp from './components/SignUp';
import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
const isLoggedIn = false;

function App() {
  return (
   
   
     

    <Router>
        
         {isLoggedIn ? <Nav/> : <h1 className ='sign_in_logo' >Student forum</h1>  }
         
       <Routes>
       <Route path='/'  element={isLoggedIn ?  <Navigate to={'/Home'}/> : <Navigate to={'/LogIn'}/> }  />
         <Route path="/home" element={<Home />} />
         {/* <Route path="/marketplace" element={<Marketplace />} />
         <Route path="/tutoring" element={<Tutoring />} />
         <Route path="/rentals" element={<Rentals />} />
         <Route path="/social" element={<Social />} /> */}
         <Route path="/login" element={<LogIn />} />
         <Route path="/register" element={<SignUp />} />

  
       </Routes>


     </Router>



  

  );
}

export default App;
