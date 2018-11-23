import React, {Component} from 'react';
import Rating from 'react-rating';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }
    handleRatingChange(rating, movieId) {
        console.log(`${rating} ${movieId}`)
        this.props.setRating(movieId, rating);
    }
    renderMovie({movies}){
        if(movies) {
            return(
                movies.map(movie => {
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
                                        onClick={(rating) => this.handleRatingChange(rating, movie.id)}
                                />
                            </div>
                        </div>
                    )
                })
            )
        }
    }
    render() {
        return(
            <div className="movie-card-container">{this.renderMovie(this.props)}</div>
        )
    }
}

export default MovieCard;