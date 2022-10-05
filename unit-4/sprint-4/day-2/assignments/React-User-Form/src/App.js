import { useState } from "react";
import "./App.css";
import { UserRow } from "./components/UserRow";
const initState={
  username: "",
  gender: "",
  role: "",
  maritalStatus: false
}
function App() {
  const [formData,setFormData]=useState(initState)
  const [users,setUsers]=useState([])
  const handleChange=(e)=>{
    const { type, checked, value, name } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: inputValue });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setUsers([...users, formData]);
  };
  const { username,gender,role, maritalStatus } = formData;
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element">
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input onChange={handleChange} name="username" value={username} placeholder="Name" type="text" />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select onChange={handleChange} value={gender}  name="gender">
              <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select onChange={handleChange} value={role} name="role">
                <option>Select Role</option>
                <option>FrontEnd Developer</option>
                <option>BackEnd Developer</option>
                <option>Full Stack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input onChange={handleChange} name="maritalStatus" checked={maritalStatus} type={"checkbox"} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button onClick={handleSubmit}>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      
      {/* map through the userdata and render UserRow component to display the data in tabular format */}
      {/* print "no users found"  in there is no user data */}
      {users.length===0?<h2>No Users Found</h2>:
       users.map((el)=>{
       return <div key={el.id}><UserRow username={el.username} gender={el.gender} role={el.role} maritalStatus={el.maritalStatus}/> </div>
      })}
    </div>
  );
}

export default App;
