// action creators related to cart state;

export const loading=(value)=>{
    return {
        type:"loading",
        payload:value
    }
}

export const error=(value)=>{
    return {
        type:"error",
        payload:value
    }
}

export const product=(value)=>{
    return {
        type:"product",
        payload:value
    }
}