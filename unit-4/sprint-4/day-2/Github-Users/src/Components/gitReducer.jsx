
 const initState = {
    isLoading: false,
    isError: false,
    data: []
}
const githubReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        }
        case "FETCH_FAILED": {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case "LOADiNG": {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        default:
            return state;
    }
}

export  {githubReducer, initState};