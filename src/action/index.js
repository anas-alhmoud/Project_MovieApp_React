const setMovie = (movie) => {
    return {
        type: "SETMOVIE",
        payload: movie
    }
}

export default setMovie


export const FavoriteAdded = (arg) => {
    return {
        type: "FavoriteAdded",
        payload: arg
    }
};

export const FavoriteRemoved = (arg) => {
    return {
        type: "FavoriteRemoved",
        payload: arg
    }
};