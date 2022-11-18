// to manage actions that can be perfomed ony

import { INC,DEC } from "./counter.types";

export const increment =(payload)=>({type:INC, payload});
export const decrement=(payload)=>({type: DEC, payload});
