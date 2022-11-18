import React, { useState} from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/auth/auth.actions";

const Login = () => {
  const {isAuth,loading,error,errorMessage}=useSelector(store=>store.auth)
  const [loginCreds, setLoginCreds] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch=useDispatch()

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds))
  };
  useEffect(()=>{
      if(isAuth){
        if (state.from) {
          navigate(state.from, { replace: true });
        } else {
          navigate("/");
        }
      }
  },[isAuth])
  if(loading){
     return <div><h1>Loading....</h1></div>
  }
  else if(error){
     return <div><h1>Error {errorMessage}</h1></div>
  }else{

  
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
};

export default Login;
