import React from 'react';
import {MdDelete} from "react-icons/md"
import {MdDone} from "react-icons/md"
import {ImCross} from "react-icons/im"



type TodoItemProps = {
    id:number;
    content: string;
    isCompleted: boolean;
    toggleStatus:Function;
    deleteTodo:Function
}

const TodoItem = ({id,content, isCompleted,toggleStatus,deleteTodo}:TodoItemProps) => {
  return (
    <div>
      <div>
        <span>{content}</span>&nbsp;
        --- &nbsp;
        <span onClick={()=>toggleStatus(id)}>{isCompleted ? <MdDone color='green'/> : <ImCross color='red'/>}</span> &nbsp;
        <span><button onClick={()=>deleteTodo(id)}><MdDelete/></button></span>

      </div>
      
    </div>
  );
}

export default TodoItem;