import { ADD_TODO, DEC, INC } from "./actionType"
 const initstate={count:0,todos:[]} 
export const reducer=(state=initstate,action)=>{
    switch(action.type){
        // case INC:{
        //     return {...state,count:state.count+1}
        // }
        // case DEC:{
        //     return {...state,count:state.count-1}
        // }
        case INC:{
           
            return {
                ...state,
                count:state.count+action.payload
            }
        }
        case DEC:{
            return {
                ...state,
                count:state.count-action.payload
            }
        }
        case ADD_TODO:{
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        }
        default:{
            return state
        }
    }
}