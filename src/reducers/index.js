
export function moviesData(initialState = {movies: []}, action) {
    switch(action.type) {
        case 'GET_MOVIES': 
            return action.payload.movies
        case 'SET_RATING': 
            const i = action.payload.index;
            return[
                ...initialState.slice(0,i), // before the one we are updating
                {...initialState[i], rating: action.payload.rating},
                ...initialState.slice(i + 1)
            ]
        default: {
            return initialState;
        }
    }
}