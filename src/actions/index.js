export function getMovies(movies) {
    return {
        type: "GET_MOVIES",
        movies
    }
}

export function setRating(rating, index, id) {
    return {
        type: "SET_RATING",
        payload: {
            index,
            rating,
            id
        }
    }
}