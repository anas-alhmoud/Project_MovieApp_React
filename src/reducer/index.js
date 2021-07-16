const movieReducer = (state = {}, action) => {
    switch (action.type) {
        case "SETMOVIE": return action.payload
        default: return state
    }
}
export default movieReducer;