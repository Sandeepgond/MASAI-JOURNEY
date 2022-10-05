// reducer related to cart state;
const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return { ...state, loading: action.payload }
        case "error":
            return { ...state, error: action.payload }
        case "product":
            return { ...state, data: action.payload }
        default:
            return state    
    }
}

export default reducer