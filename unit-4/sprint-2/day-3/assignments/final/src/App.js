import "./App.css";
import data from "../src/db.json"
import UserDetails from "./components/UserDetails";
import { useState } from "react";
// console.log(data);

function App() {
  const [user,setUser]=useState(data)

  const handleAsc=()=>{
   let asc=[...user].sort((a, b) =>
    a.first_name > b.first_name ? 1 : -1,
  );
   setUser(asc)
   console.log(user)
  }

  const handleDec=()=>{
    let dsc=[...user].sort((a, b) =>
    a.first_name > b.first_name ? -1 : 1,
  );
   setUser(dsc)
   console.log(user)
  }

  return (
    <div className="App" data-testid = 'app' >
      <button onClick={handleAsc} data-testid = 'sort-asc-btn'>Sort by Asc</button>
      <button onClick={handleDec} data-testid = 'sort-desc-btn'>Sort by Desc</button>
      {/* <UserDetails /> */}
    
    

      {/*  map through the users data and pass props to the Userdetails component */}

      {user.map((item)=>(         
      <UserDetails  key={item.id} avatar={item.avatar} first_name={item.first_name} last_name={item.last_name} 
      address={item.address} karma={item.karma}  posts={item.posts} followers={item.followers } is_following={item.is_following }  />   
     ))}      
   
    </div>
  );
}
export default App;