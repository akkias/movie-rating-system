import React, {Component} from 'react';
import Rating from 'react-rating';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            movies: []
        };
    }
    componentDidMount() {
        this.setState({
            movies: this.props.movies
        })
    }
    renderMovie(props){
        return(
                props.movies && props.movies.map(movie => {
                    return(
                        <div className="movie-card" key={movie.id}>
                            <div className="movie-card-poster">
                                <img alt={movie.title} src={`/assets/images/posters/${movie.poster}`} />
                            </div>
                            <div className="movie-card-footer">
                                <h4 className="movie-card-title">{movie.title}</h4>
                                <Rating initialRating={movie.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        className="movie-card-rating"
                                        onClick={(rating) => this.props.setRating(rating, movie.id)}
                                />
                            </div>
                        </div>
                    )
                }
            )
        )
    }
    render() {
        return(
            <div className="movie-card-container">
                {(this.props.movies && this.props.movies.length > 1) && this.renderMovie(this.props)}
            </div>
        )
    }
}

export default MovieCard;