import './App.css';
import { useDispatch ,useSelector} from 'react-redux';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './store/store';


function App() {
  const state=useSelector((state)=>state)
  const dispatch= useDispatch()
  return (
    <div className="App">
      <h1>count:{state.count}</h1>
      <button onClick={()=>dispatch({type:INCREMENT_COUNTER})}>ADD</button>
      <button disabled={state.count===0} onClick={()=>dispatch({type:DECREMENT_COUNTER})}>REDUCE</button>
    </div>
  );
}

export default App;
