import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from "../Redux/counter/counter.actions"


function CounterApp() {
    const count= useSelector((store)=>store.counter.count)
  //we can store or state whatever it may be
  const dispatch= useDispatch();
  return (
    <div>
        <h2>{count}</h2>

<div>
  <button onClick={()=>dispatch(increment(1))}>Add</button>
  <button onClick={()=>dispatch(decrement(1))}>Remove</button>
</div>
    </div>
  )
}

export default CounterApp
