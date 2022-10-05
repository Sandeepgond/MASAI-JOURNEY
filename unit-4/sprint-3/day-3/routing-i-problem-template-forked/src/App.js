import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "./Components/Navbar/AllRoutes"
import Navbar from "./Components/Navbar/Navbar"



function App() {
  return (
    <div>
  <BrowserRouter>
      
      <Navbar/>
      <AllRoutes/>
  </BrowserRouter>;
  
    </div>
  )
}

export default App;