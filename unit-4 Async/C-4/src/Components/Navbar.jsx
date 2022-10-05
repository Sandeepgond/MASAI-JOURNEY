import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Box} from "@chakra-ui/react"
import { AppContext } from "../Context/AuthContext/AuthContextProvider";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  const {state}=useContext(AppContext)
  return <Box display="flex" justifyContent="space-between">
    <h1>Token: {state.token}</h1>
    <Box display="flex" justifyContent="space-around" gap={10}>
    <Link to="/">Home</Link>

    <Link to="/login">Login</Link>
    <Link to="/cart">Cart</Link>
    </Box>
  </Box>;
};

export default Navbar;
