import favoriteList from './favoriteList'
import { combineReducers } from 'redux'

export const movieReducer = (state = {}, action) => {
    switch (action.type) {
        case "SETMOVIE": return action.payload
        default: return state
    }
}

const allReducers = combineReducers({
    movieReducer,
    favoriteList,
})

export default allReducers;