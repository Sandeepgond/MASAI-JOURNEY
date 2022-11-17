
import { createContext } from "react"
import { useState } from "react"
export const AuthContext =createContext()
export default function AppContextProvider({children}){
   const [user,setUser]= useState({
    isAuth: false,
    token: null
   })
   const handleLogin =({token})=>{
    setUser({
        isAuth:true,
        token:token
    })
   }     
   const handleLogOut =()=>{
    setUser({
        isAuth:false,
        token:null
    })
   }  
    return ( 
    <AuthContext.Provider value={{user,handleLogin,handleLogOut}} >
        {children}
    </AuthContext.Provider>
    )
}
