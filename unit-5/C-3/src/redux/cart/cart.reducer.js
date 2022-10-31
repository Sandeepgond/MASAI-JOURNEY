import {
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  RESET_CART_ITEMS,
} from "./cart.types";

// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState,{type,payload}) => {
  switch (type) {
    case GET_CART_ITEMS_LOADING:{
        return {
          ...state,
          loading:true,
          error:false
        }
    }
    case GET_CART_ITEMS_SUCCESS:{
      return {
        ...state,
        getCartItems:payload,
        loading:false,
        error:false
      }
    }
    case GET_CART_ITEMS_ERROR:{
      return {
        ...state,
        loading:false,
        error:true
      }
    }
    case ADD_ITEM_TO_CART_LOADING: {
      return { ...state,
         addCartItem: { loading: true, error: false } 
        };
    }
    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        data: [...state.data, payload],
        addCartItem: { loading: false },
      }
    }
    case ADD_ITEM_TO_CART_ERROR: {
      return { ...state, 
        addCartItem: { loading: false, error: true } 
      }
    }

    case UPDATE_CART_ITEMS_LOADING:{
      return {
        ...state,
        loading:true,
        error:false
      }
    }
    case UPDATE_CART_ITEMS_SUCCESS:{
      return {
        ...state,
        updateCartItems:payload,
        loading:false,
        error:false
      }
    }
    case UPDATE_CART_ITEMS_ERROR:{
      return {
        ...state,
        loading:false,
        error:true
      }
    }
    

    case REMOVE_CART_ITEMS_LOADING:{
      return {
        ...state,
        loading:true,
        error:false
      }
    }
    case REMOVE_CART_ITEMS_SUCCESS:{
      return {
        ...state,
        loading:false,
        error:false
      }
    }
    case REMOVE_CART_ITEMS_ERROR:{
      return {
        ...state,
        loading:false,
        error:true
      }
    }
    case RESET_CART_ITEMS:{
      return {
        cartInitalState
      }
    }
    default:{
        return state
    }
        
  }
};
