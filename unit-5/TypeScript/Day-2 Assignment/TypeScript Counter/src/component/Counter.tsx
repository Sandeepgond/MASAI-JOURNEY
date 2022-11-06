import { useState } from "react"

export const Counter=()=>{
    const [count,setCount]=useState<number>(0)

    return (
    <div>
        <h1>Count:{count}</h1>
        <div>
            <button disabled={count===0} onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    </div>
    )
}