import './App.css';
import { useDispatch ,useSelector} from 'react-redux';
import { addTodo, decrement, increment } from './redux/action';
import { useState } from 'react';
function App() {
  const [value,setValue]=useState(0)
  const count=useSelector((state)=>state.count)
  const todos=useSelector((store)=>store.todos)
  const dispatch= useDispatch()
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(increment())}>ADD</button>
      <button  onClick={()=>dispatch(decrement())}>REDUCE</button>
      <div>
        <input type="number" onChange={({target})=>setValue(Number(target.value))}/>
        <button onClick={()=>dispatch(increment(value))}>Inc by val</button>
        <button  onClick={()=>dispatch(decrement(value))}>Dec by val</button>
      </div>

      <div>
      { todos.map((todo, index) => (
              <div key={index}>{todo}</div>
          )) }
        <input type="text"  onChange={({target})=>setValue(target.value)}  />
        <button onClick={()=>dispatch(addTodo(value))}>Add todo</button>
      </div>
    </div>
  );
}

export default App;
