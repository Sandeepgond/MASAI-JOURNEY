import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add_todo,update_todo,delete_todo, get_todo} from "../Redux/todo/todo.actions"; 
import { GET_TODO } from '../Redux/todo/todo.types';
function TodoApp() {
    const todos= useSelector((store)=>store.todo.todos)
   const [value,setValue]= useState("");
   const dispatch= useDispatch();


   useEffect(()=>{
     get_todo().then((d)=> dispatch({type: GET_TODO, payload: d})); //dispatch should be change
    // get_todo(dispatch)
   },[]);
    return (
    <div>
       {todos.map((todo)=>{
        return <div key={todo.id}>
           <div
           onClick={()=>dispatch(update_todo({...todo, status: !todo.status}))}
           >{todo.name} --- {todo.status?"Completed":"Pending"}</div>
            
            <button onClick={()=>dispatch(delete_todo(todo))} >DELETE</button>
        </div>
       })}
       <hr></hr>      
    <div>
        <input value={value} onChange={({target})=>setValue(target.value)}/>
        <button 
        onClick={()=>{dispatch(add_todo({name:value, status: false})); setValue("")}}
        >Add Todo</button>

    </div>

    </div>
  )
}

export default TodoApp
