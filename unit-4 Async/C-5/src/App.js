import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "role":
      return { ...state, role: action.payload };
    case "maritalStatus":
      return { ...state, maritalStatus: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {

const [state , dispatch] = useReducer(reducer,initialState)

const [user , setUser] = useState([]);

const handleSubmit=(e)=>{
e.preventDefault();
setUser([...user, state])
dispatch({type:"reset"});
}

const handleChange=(e)=>{
  const {checked , name, value} = e.target;
  const val = name==="maritalStatus" ? checked : value;
  dispatch({type: name, payload: val});
}

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element"  onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" name="name" placeholder="name" value={state.name} onChange={(e)=>handleChange(e)}  />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender"   data-testid="gender-select" value={state.gender} onChange={(e)=>handleChange(e)}>
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role"   data-testid="role-select" value={state.role} onChange={(e)=>handleChange(e)}>
                <option>FrontEnd Developer</option>
                <option>BackEnd Developer</option>
                <option>FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"}   name="maritalStatus" checked={state.maritalStatus} onChange={(e)=>handleChange(e)} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button   type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the userdata and render UserRow component to display the data in tabular format */}
        {/* print "no users found"  in there is no user data */}

      {user.length===0 ? (
      <h2 data-testid = "no-user-container" > no users found</h2>
      ) : (
        <table border="1px solid black">
          <thead>
          <tr>
            <th>S.no</th>
            <th>Users</th>
            <th>Gender</th>
            <th>Role</th>
            <th>marital Status</th>
          </tr>
          </thead>
          <tbody>
            {user.map((el, i)=>{
              return (
                <tr key={i+1}>
                  <UserRow{...el} key={el.id} id={i+1}/>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}

      </div>
    </div>
  );
}

export default App;