import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import Header from './Header';
import {getMovies, setRating} from '../actions';

const MOVIES_URL = "https://my-json-server.typicode.com/akkias/json-data/movies";

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    fetchAllMovies = () => {
        fetch(`${MOVIES_URL}?_sort=rating&_order=desc`)
        .then(response => response.json())
        .then(response => {
            this.props.getMovies(response);
        })
    }
    componentDidMount() {
        this.fetchAllMovies();
    }
    handleRatingChange = async (rating, index, id) => {
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
                <Header setRating={this.handleRatingChange} />
                <MovieCard movies={this.props.movies} setRating={this.handleRatingChange} />
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