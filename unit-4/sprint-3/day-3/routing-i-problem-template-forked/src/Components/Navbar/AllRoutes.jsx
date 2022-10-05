import { Routes, Route } from "react-router-dom";
import React from "react"


function AllRoutes() {
  return (
    <div>
      <Routes>
    <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/contact" element={<h1>Contact Page</h1>}/>
      <Route path="/about-us" element={<h1>About Page</h1>}/>
      <Route path="/services" element={<h1>Services Page</h1>}/>
      <Route path="/login" element={<h1>Login Page</h1>}/>
    
      </Routes>
    </div>
  );
}

export default AllRoutes;