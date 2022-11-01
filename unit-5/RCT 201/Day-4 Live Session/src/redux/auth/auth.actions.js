import axios from "axios"
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.actionTypes"

export const login=(creds)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        let response=await axios.post("https://reqres.in/api/login", creds)
        dispatch({type:LOGIN_SUCCESS,payload:response.data})
        return response.data
    } catch (error) {
        dispatch({type:LOGIN_ERROR,payload:error.message})
    }
}

export const logout=()=>({type:LOGOUT})
