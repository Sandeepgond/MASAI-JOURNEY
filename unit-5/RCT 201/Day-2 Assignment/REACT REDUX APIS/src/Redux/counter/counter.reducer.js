import { DEC, INC } from "./counter.types";
const intialState = {count:0}
// to have all state management in one function
export const counterReducer=(state=intialState,{type,payload})=>{
    switch(type){
        case INC :{
            return {count : state.count+payload}
        }
        case DEC :{
            return {count : state.count-payload}
        }
        default:{ 
            return state;
        }
    }

}