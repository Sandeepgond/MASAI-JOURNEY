import { legacy_createStore,compose, combineReducers } from "redux"
import { counterReducer } from "./counter/counter.reducer" 
import { todoReducer } from "./todo/todo.reducer"

const createComposer=window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const rootReducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer

})

export const store=legacy_createStore(rootReducer,createComposer())
