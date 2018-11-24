import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactInterval from 'react-interval';
import MovieCard from './MovieCard';
import {getMovies, setRating} from '../actions';

const MOVIES_URL = "http://localhost:3001/movies";

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
        this.fetchMovies = this.fetchMovies.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
    }
    fetchMovies() {
        fetch(`${MOVIES_URL}?_sort=rating&_order=desc`)
        .then(response => response.json())
        .then(response => {
            this.props.getMovies(response);
        })
    }
    componentDidMount() {
        this.fetchMovies();
    }
    handleRatingChange(rating, movieId) {
        this.props.setRating(rating, movieId);
        fetch(`${MOVIES_URL}/${movieId}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: rating})
        })
    }
    render() {
        return(
            <>
                <div className="header">
                    <h1>Movie Rating App</h1>
                    <button className="random-rating-btn">
                        <i className="fas fa-sync fa-spin"></i>Random Rating
                    </button>
                </div>
                <MovieCard movies={this.props.movies} setRating={(rating, index) => this.handleRatingChange(rating, index)} />
            </>
        )
    }
}

const mapStateToProps =  function(state) { 
    return {
        movies: state.moviesData
    }
}
function matchDispatchToProps(dispatch){
return bindActionCreators({setRating, getMovies}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Movies);