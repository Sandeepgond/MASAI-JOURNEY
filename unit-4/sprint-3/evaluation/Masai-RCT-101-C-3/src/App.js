import AllRoutes from "./Routes/AllRoutes";
import "./styles.css";
import {BrowserRouter} from "react-router-dom"
import Home from "./Routes/Home";
import Dashboard from "./Routes/Dashboard";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <AllRoutes />
      <Home/>
      <Dashboard/>
      </BrowserRouter>
      
    </div>
  );
}

// authentication: reqres.in
//