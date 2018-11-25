import {getMovies, setRating} from '../actions';
import {movieStore} from '../index';
const MOVIES_URL = "https://movies-dbase.herokuapp.com/movies";



export const handleRatingChange = async (rating, index, id) => {
    try {
        fetch(`${MOVIES_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: rating})
        })
        await movieStore.dispatch(setRating(rating, index, id));
    }
    catch(e) {
        console.log('Error!', e);
    }
}

export const fetchAllMovies = () => {
    fetch(`${MOVIES_URL}?_sort=rating&_order=desc`)
    .then(response => response.json())
    .then(response => {
        movieStore.dispatch(getMovies(response));
    })
}