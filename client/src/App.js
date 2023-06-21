import Home from "./components/Home";
import Nav from './components/Nav';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
   
    <div>
     

    <Router>
         <Nav />

         
       <Routes>

         <Route path="/home" element={<Home />} />
  
       </Routes>


     </Router>



   </div>

  );
}

export default App;
