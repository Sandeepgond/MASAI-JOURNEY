import { useContext } from "react"
import { AuthContext } from "../Context/AppContext"
import {Navigate} from "react-router-dom"

 export default function PrivateRoute({children}) {
    const {user } = useContext(AuthContext)
 
 if(!user.isAuth){
    return(
        <Navigate to="/login" />
    )
 }
return children
}