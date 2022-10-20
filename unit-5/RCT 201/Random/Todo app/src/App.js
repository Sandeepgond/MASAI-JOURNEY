import './App.css';
// import { CounterApp } from './redux/Component/CounterApp';
import { TodoApp } from './redux/Component/TodoApp';
function App() {
  // const [value,setValue]=useState(0)

  return (
    <div className="App">
      {/* <div>
        <input type="number" onChange={({target})=>setValue(Number(target.value))}/>
        <button onClick={()=>dispatch(increment(value))}>Inc by val</button>
        <button  onClick={()=>dispatch(decrement(value))}>Dec by val</button>
      </div>
      */}
      {/* <div>
      { todos.map((todo, index) => (
              <div key={index}>{todo}</div>
          )) }
        <input type="text"  onChange={({target})=>setValue(target.value)}  />
        <button onClick={()=>dispatch(addTodo(value))}>Add todo</button>
      </div>  */}

      {/* <CounterApp/> */}
      <TodoApp/>
    </div>
  );
}

export default App;
