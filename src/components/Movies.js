import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import {getMovies} from '../actions';

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
        .then(response => {
            //this.setState({movies: movies});
            this.props.dispatch(getMovies(response));
        })
    }
    componentDidMount() {
        this.fetchMovies();
    }
    handleRatingChange(rating, movieId) {
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
            <>
                <MovieCard movies={this.props.movies} setRating={(rating, movieId) => this.handleRatingChange(movieId, rating)} />
            </>
        )
    }
}

const mapStateToProps =  function(state) { 
    return {
        movies: state.moviesData
    }
}
export default connect(mapStateToProps)(Movies);