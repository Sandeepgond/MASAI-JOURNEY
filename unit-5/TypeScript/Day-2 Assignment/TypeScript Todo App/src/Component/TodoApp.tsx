import { useState } from "react";
import  TodoInput  from "./Todoinput"
import TodoItem  from "./TodoItem"

type Todo={
    id:number;
    content:string;
    isCompleted:boolean;
}
export const TodoApp=()=>{
    const [todos,setTodos]=useState<Todo[]>([])

    const addTodo=(content:string)=>{
        setTodos([
            ...todos,
            {
                id:Date.now(),
                content,
                isCompleted:false,
            }
        ])
    }
    const toggleStatus = (id: number) => {
        let updatedTodos = todos.map(todo => {
         if (todo.id===id) {
             todo.isCompleted = !todo.isCompleted;
         }
         return todo;
        })
        setTodos(updatedTodos)
     };
 
     const deleteTodo = (id: number) => {
         let updatedTodos = todos.filter((todo)=>todo.id!==id)
         setTodos(updatedTodos);
     };
    return (
        <>
            <h3>TODO APP</h3>
            <TodoInput onAdd={addTodo} />
            {todos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleStatus={toggleStatus}  />    
             })}
        </>
    )
}