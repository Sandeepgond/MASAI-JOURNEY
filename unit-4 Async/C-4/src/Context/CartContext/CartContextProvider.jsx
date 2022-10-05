import React from "react";
import { createContext,useReducer } from "react"
import reducer from "./reducer"

export const CartContext = createContext()

// 1. create cart context and cart context provider for the entire application to have cart related data;

// 2. maintain cart data in the state; it goes without saying; you are expected to use useReducer as state management tool; ( Hint : different actions you are expected to have are adding item to cart, removing item from cart, and checkout ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

const CartContextProvider = ({children}) => {
  const initialState={
    loading:false,
    error:false,
    data:[]
  }

  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;

// import { createContext,useReducer } from "react"
// import reducer from "./reducer"


// // 1. create auth context and auth context provider for the entire application to have auth related data;

// // 2. maintain loading,error, auth status and token in the state; it goes without saying; you are expected to use useReducer as state management tool; (hint : different actions that you are expected to have can be login - loading, success, failure ..)

// // 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

// export const AppContext = createContext()

// const AuthContextProvider = ({children}) => {
//   const initialState={
//     loading:false,
//     error:false,
//     authStatus:false,
//     token:null
//   }

//   const [state,dispatch]=useReducer(reducer,initialState)

//   return (
//       <AppContext.Provider value={{ state, dispatch }}>
//           {children}
//   </AppContext.Provider>
// )
// };

// export default AuthContextProvider;
