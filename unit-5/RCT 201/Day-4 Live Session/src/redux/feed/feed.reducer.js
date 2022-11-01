import { GET_FEEDS } from "./feed.actionTypes"

const initState={
  feeds:[]
}

export const feedReducer=(state=initState,{type,payload})=>{
      switch (type) {
        case GET_FEEDS:{
            return {
              ...state,
              feeds:payload     
            }
        }
      
        default:{
            return state
        }
            
      }
}