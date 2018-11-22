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
    componentDidMount() {
        fetch(`${MOVIES_URL}?_sort=rating&_order=desc`)
        .then(response => response.json())
        .then(movies => {
            this.setState({movies: movies});
        })
    }
    render() {
        return(
            this.state.movies && <MovieCard movies={this.state.movies} />
        )
    }
}

export default Movies;