// Product actions here
import axios from "axios"
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, RESET_PRODUCTS } from "./product.types"

export const getProducts=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try {
        let response=await axios.get(" http://localhost:8080/products")
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
        return response.data
    } catch (error) {
        dispatch({type:GET_PRODUCTS_ERROR,payload:error.message})
    }
}

export const productReset=()=>({type:RESET_PRODUCTS})
