import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import Header from './Header';
import Spinner from './Spinner';
import {getMovies, setRating} from '../actions';
import {fetchAllMovies, handleRatingChange} from '../utils/apiUtils'

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    
    componentDidMount() {
        fetchAllMovies();
    }
    
    render() {
        return(
            <>
                { this.props.movies.length ?
                    <div>
                        <Header setRandomRatingFunc={handleRatingChange} />
                        <MovieCard movies={this.props.movies} setRatingFunc={handleRatingChange} />
                    </div>
                : 
                <div className="page-loader"><Spinner size="lg" /></div>
                }
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
export { Movies };