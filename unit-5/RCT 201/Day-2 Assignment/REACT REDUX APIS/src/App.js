// import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CounterApp from './components/CounterApp';
import TodoApp from './components/TodoApp';
// import { decrement, increment } from './Redux/counter/counter.actions';
function App() {
  
  // const [value,setValue]=useState("");
  // const count= useSelector((store)=>store.counter.count)
  //we can store or state whatever it may be
  // const dispatch= useDispatch();
  return (
    <div className="App">
      <CounterApp />
      <hr></hr>
          <div>
            <h1>Todo List</h1>
            <TodoApp/>
          </div>
    </div>
  );
}

export default App;
