

import { useState } from "react"

export const useMyReducer=<T,U>(reducerFn:Function,initialState:T):[T,((action:U)=>void)]=>{
    const [state,setState]=useState<T>(initialState)

    const dispatch=(action:U)=>{
        let updatedStates=reducerFn(state,action)
        setState(updatedStates)
    }
    return [state,dispatch]
}