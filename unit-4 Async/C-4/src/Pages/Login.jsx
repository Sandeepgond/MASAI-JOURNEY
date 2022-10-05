





import React, { useContext, useState } from "react";
import { Stack, Input, Button,Container,Text } from "@chakra-ui/react"
import axios from "axios";
import { AppContext } from "../Context/AuthContext/AuthContextProvider";
import { error, loading, status, token } from "../Context/AuthContext/action";
import { Navigate, useNavigate } from "react-router-dom";


const data={
  email:"",
  password:""
}
// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const { state, dispatch } = useContext(AppContext)
  const [text, setText] = useState(data);
  const navigate=useNavigate()

  


  
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setText({...text,[name]:value})
  }
  
  const {email,password} = text
  const handleSubmit = () => {
    dispatch(loading(true))
    axios.post(`https://reqres.in/api/login`, text).then(
      (res) => {
        console.log(res);
        console.log(res.data.token)
        dispatch(status(true))
        dispatch(loading(false))
        dispatch(error(false));
        dispatch(token(res.data.token));
        // navigate("/")
      },
      (err) => {
        dispatch(loading(false))
        dispatch(error(true));
      }
    );
    
  }

  if (state.authStatus) {
    return <Navigate to="/" />;
  }

  if (state.error){
    alert("Something went wrong. please refresh.")
  }

  console.log(state.error)
  console.log(state.token)

  return (
    <Container>
      <Stack spacing={3}>
        <Input placeholder='Email' size='md' name="email" value={email} onChange={handleChange} />
        <Input placeholder='Password' size='md' name="password" value={password} onChange={handleChange} />
      {state.loading?<Text>....Loading</Text>:null}
        <Button disabled={state.loading} onClick={handleSubmit}>Login</Button>
      </Stack>
    </Container>

  );
};

export default Login;
