import {INC,DEC, ADD_TODO} from "./actionType"

export const increment=(payload=1)=> {
    return {type:INC,payload}
}
export const decrement=(payload=1)=>({type:DEC,payload})

export const addTodo=(payload)=>({type:ADD_TODO,payload})
    
