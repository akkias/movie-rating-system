import React, {Component} from 'react';
import MovieCard from './MovieCard';
const MOVIES_URL = "http://localhost:3001/movies";

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    fetchMovies() {
        fetch(`${MOVIES_URL}?_sort=rating&_order=desc`)
        .then(response => response.json())
        .then(movies => {
            this.setState({movies: movies});
        })
    }
    componentDidMount() {
        this.fetchMovies();
    }
    handleRatingChange(movieId, rating) {
        fetch(`${MOVIES_URL}/${movieId}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: rating})
        })
        .then(() => this.fetchMovies());
    }
    render() {
        return(
            <MovieCard movies={this.state.movies} setRating={(movieId, rating) => this.handleRatingChange(movieId, rating)} />
        )
    }
}
export default Movies;