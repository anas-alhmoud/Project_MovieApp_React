export default function favoriteList(state = [], action) {
    switch (action.type) {
        case "FavoriteAdded":
            return [
                ...state,
                action.payload
            ]
        case"FavoriteRemoved":
        let updatedState = [...state]
        updatedState.forEach((movie,index) => {
            if (movie.id === action.payload){
                updatedState.splice(index, 1)
            }
        });
        return updatedState
        default:
            return state
    }
}