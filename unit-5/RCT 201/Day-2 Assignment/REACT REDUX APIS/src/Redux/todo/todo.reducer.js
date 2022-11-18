import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from "./todo.types";


const intialState= {todos:[]};

export const todoReducer =(state=intialState, {type,payload})=>{
    switch(type) {
        case GET_TODO :{
            return { ...state, todos: payload}
         }
         case ADD_TODO :{
            return { ...state, todos: [...state.todos,payload]}
         }
         case UPDATE_TODO :{
            const id= payload.id;
            const updatedTodos= state.todos.map((todo)=>{
                if(todo.id===id){
                    return payload;
                }
                    return todo;
            });
            return {...state, todos:updatedTodos};
         }

        case DELETE_TODO :{
            const id= payload.id;
          const filterTodos= state.todos.filter((todo)=> todo.id !== id)
            return {...state, todos:filterTodos}
        }                 
        default:{
            return state;
        }
    }
}