import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { loginsuccess } from "../Context/AppContext";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input 
  } from '@chakra-ui/react'


function Login() {
  const { dispatch, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const handlechange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(loginsuccess);
        setToken(res.token);
        navigate("/dashboard");
      })
      .catch((err) => {alert("please refresh page")});
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <FormControl >
            <FormLabel>Email address</FormLabel>
            <Input type='email' name="email" placeholder="Enter  email" onChange={handlechange}/>

            <FormLabel>Password</FormLabel>
            <Input  name="password" type="password" placeholder="password" onChange={handlechange} />
            
            <Input type='submit' value='submit'/>
            </FormControl>
        </form>

            
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;