import Home from "./components/Home";
import Nav from './components/Nav';
import LogIn from './components/LogIn';
import Tutoring from './components/Tutoring';
import Rentals from './components/Rentals';
import Social from './components/Social';
import Marketplace from './components/Marketplace';
import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const isLoggedIn = false;

function App() {
  return (
   
    <div>
     

    <Router>
        
         
         
       <Routes>
       <Route path='/'  element={isLoggedIn ?  <Navigate to={'/Home'}/> : <Navigate to={'/LogIn'}/> }  />
         <Route path="/home" element={<Home />} />
         <Route path="/marketplace" element={<Marketplace />} />
         <Route path="/tutoring" element={<Tutoring />} />
         <Route path="/rentals" element={<Rentals />} />
         <Route path="/social" element={<Social />} />

  
       </Routes>


     </Router>



   </div>

  );
}

export default App;
