import { GET_POSTS } from "./post.actionTypes"

const initState={
  posts:[]
}

export const postReducer=(state=initState,{type,payload})=>{
      switch (type) {
        case GET_POSTS:{
          return {
            ...state,
            posts:payload
          }
        }
        
      
        default:{
            return state
        }
            
      }
}