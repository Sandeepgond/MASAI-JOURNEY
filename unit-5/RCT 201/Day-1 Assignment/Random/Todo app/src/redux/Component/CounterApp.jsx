import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../counter/counter.actions"


export const CounterApp=()=>{
    const count=useSelector((state)=>state.counter.count)
    const dispatch= useDispatch()
    return (<div>
        <h1>CounterApp</h1>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(increment())}>ADD</button>
      <button  onClick={()=>dispatch(decrement())}>REDUCE</button>
    </div>)
}