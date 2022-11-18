import { legacy_createStore } from "redux"

export const INCREMENT_COUNTER="INCREMENT_COUNTER"
export const DECREMENT_COUNTER="DECREMENT_COUNTER"

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT_COUNTER":{
            return {count:state.count+1}
        }
        case "DECREMENT_COUNTER":{
            return {count:state.count-1}
        }

        default:{
            return state
        }
    }
}

export const store=legacy_createStore(reducer,{count:0})
