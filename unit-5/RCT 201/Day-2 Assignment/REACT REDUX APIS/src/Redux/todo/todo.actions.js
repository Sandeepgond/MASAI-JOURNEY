import axios from "axios";
import {ADD_TODO,UPDATE_TODO,DELETE_TODO, GET_TODO } from "./todo.types";

export const get_todo=async(dispatch)=>{
    let res=  await axios.get('http://localhost:8080/todos');
    let data= await res.data;
    // console.log(data);
    // return data;
    // below code is wrong----> gettodo returns a promise
    // return {
    //     type: GET_TODO,
    //     payload: data
    // }
    dispatch ({
            type: GET_TODO,
            payload: data
        })
};
export const add_todo= (payload)=>({type:ADD_TODO,payload:{id:Date.now(), ...payload}});

export const update_todo= (payload)=>({type:UPDATE_TODO,payload});

export const delete_todo= (payload)=>({type:DELETE_TODO,payload});


