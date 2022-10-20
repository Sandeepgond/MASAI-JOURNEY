import {INC,DEC} from "./counter.types"

export const increment=()=> {
    return {type:INC,}
}
export const decrement=()=>({type:DEC,})

    
