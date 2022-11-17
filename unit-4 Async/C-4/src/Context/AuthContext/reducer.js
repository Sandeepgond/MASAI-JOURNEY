// reducer related to auth state;

const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return { ...state, loading: action.payload }
        case "error":
            return { ...state, error: action.payload }
        case "status":
            return { ...state, authStatus: action.payload }
        case "token":
            return { ...state, token: action.payload }
        default:
            return state    
    }
}

export default reducer