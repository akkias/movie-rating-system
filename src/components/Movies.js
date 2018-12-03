import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import Header from './Header';
import Spinner from './Spinner';
import {getMovies, setRating} from '../actions';
import {get, handleRatingChange} from '../utils/apiUtils'


class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    
    componentDidMount() {
        get('https://movies-dbase.herokuapp.com/movies').then(
            response => this.props.getMovies(response)
         ).catch(
            error => console.log(error)
         );
    }

    setMovieRating = (rating, index, id) => {
        handleRatingChange(rating, index, id)
        .then(this.props.setRating(rating, index, id))
        .catch(
            error => console.log(error)
         );
    }
    
    render() {
        return(
            <div>
                { this.props.movies.length ?
                    <div>
                        <Header store={this.props.store} />
                        <MovieCard movies={this.props.movies} store={this.props.store} setRatingFunc={this.setMovieRating} />
                    </div>
                : 
                <div className="page-loader"><Spinner size="lg" /></div>
                }
            </div>
        )
    }
}

const mapStateToProps =  (state) => { 
    return {
        movies: state.moviesData
    }
}
const mapDispatchToProps = dispatch => bindActionCreators(
    { setRating, getMovies }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
export { Movies };