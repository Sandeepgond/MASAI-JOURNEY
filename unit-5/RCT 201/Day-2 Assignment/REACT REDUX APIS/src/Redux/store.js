import { legacy_createStore, compose, combineReducers } from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { todoReducer } from "./todo/todo.reducer";

// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const combineReducer = combineReducers({ counter: counterReducer, todo: todoReducer });
export const store = legacy_createStore(combineReducer, createComposer());
