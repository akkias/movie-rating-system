import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import Header from './Header';
import {getMovies, setRating} from '../actions';

const MOVIES_URL = "http://localhost:3001/movies";

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
        this.fetchAllMovies = this.fetchAllMovies.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
    }
    fetchAllMovies() {
        fetch(`${MOVIES_URL}?_sort=rating&_order=desc`)
        .then(response => response.json())
        .then(response => {
            this.props.getMovies(response);
        })
    }
    componentDidMount() {
        this.fetchAllMovies();
    }
    async handleRatingChange(rating, index, id) {
        try {
            await fetch(`${MOVIES_URL}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({rating: rating})
            })
            this.props.setRating(rating, index)
        }
        catch(e) {
            console.log('Error!', e);
        }
    }
    render() {
        return(
            <>
                <Header setRating={(rating, index, id) => this.handleRatingChange(rating, index, id)} />
                <MovieCard movies={this.props.movies} setRating={(rating, index, id) => this.handleRatingChange(rating, index, id)} />
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