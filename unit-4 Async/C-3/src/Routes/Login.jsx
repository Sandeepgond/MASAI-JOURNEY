import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AppContext";

export default function Login() {
  const {handleLogin}= useContext(AuthContext)
  const navigate=useNavigate()
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")
  const [disable,setDisable]=useState(false)
//  const [logUser,setLogUser]= useState({
//    email:"",
//    password:""
//  })
//  const handleChange=(e)=>{
//    const {name, value} = e.target
//    setLogUser({
//      ...logUser,[name]:value
//    })
//  }

 const handleSubmit= (e) =>{
   e.preventDefault();   
   setDisable(true)
  //  let email= logUser.email
  //  let  password = logUser.password
   
   fetch(`https://reqres.in/api/login`,{
     method:"POST",
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({email:email,password:pass})
   }).then((res)=>res.json())
   .then(res=> {
    if(res.token){
      handleLogin(res.token),
     navigate("/dashboard")
    }
   })
}
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input value={email} data-testid="email-input" type="email" placeholder="email"  
           onChange={(e)=>setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <input value={pass}
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e)=>setPass(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button disabled={disable} data-testid="form-submit" type="submit" >
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
