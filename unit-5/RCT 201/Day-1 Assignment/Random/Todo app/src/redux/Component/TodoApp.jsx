import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, updateTodo,deleteTodo } from "../todo/todo.actions"


export const TodoApp=()=>{
    const [value,setValue]=useState("")
    const todos=useSelector((store)=>store.todo.todos)
    const dispatch=useDispatch()

    return (
    <div>
        <h1>TodoApp</h1>
        {
            todos.map((el)=>(
                <div  key={el.id}>
                    <div onClick={()=>
                        dispatch(
                            updateTodo({
                                ...el,
                                status:el.status==="Not Completed" 
                                ?"Completed":"Not Completed"

                            })
                        )
                    }
                >
                        {el.name} - {el.status} <npsp />
                        <button onClick={()=>dispatch(deleteTodo(el))}>Delete</button>
                    </div>
                   
                </div>
            ))
        }
       <div>
       <input type="text" value={value} onChange={({target})=>setValue(target.value)}/>
        <button onClick={()=>{
            dispatch(addTodo({
                name:value,
                status:"Not Completed"
            }))
            setValue("")
        }}>Add Todo</button>
       </div>
    </div>)
}