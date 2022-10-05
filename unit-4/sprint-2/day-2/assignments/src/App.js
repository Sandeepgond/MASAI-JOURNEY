import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Posts from './Posts/Post';

function App() {
  // const [text,setText]=useState("")
  // const [todos,setTodos]=useState([])
  // const handleAdd=()=>{
  //   setTodos([
  //     ...todos,{
  //       id:Date.now().toString(),
  //       title:text,
  //       status:false
  //     }
  //   ])
  //   setText("")
  // }
  return (
    <div className="App">
      <header className="App-header">
      {/* <div>
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Add Something"/> 
      <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {
          todos.map(el=><li key={el.id}> {el.title}  </li>)
        }
      </ul> */}

      <Posts/>

      </header>
    </div>
  );
}

export default App;
