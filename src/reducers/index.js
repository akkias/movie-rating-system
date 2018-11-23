
export function moviesData(initialState = {movies: []}, action) {
    switch(action.type) {
        case 'GET_MOVIES': {
            return action.movies
        }
        default: {
            return initialState;
        }
    }
}