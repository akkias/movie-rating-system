import React from 'react';
import {sortDesc} from '../utils/functionUtils'
import Rating from 'react-rating';

const renderMovie = (props) => {
    return(
            props.movies && sortDesc(props.movies).map((movie, index) => {
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
                                onClick={(rating) => props.setRatingFunc(rating, index, movie.id)}
                            />
                        </div>
                    </div>
                )
            }
        )
    )
}

const MovieCard = (props) => {  
    return(
        <div className="movie-card-container">
            {(props.movies && props.movies.length >= 1) && renderMovie(props)}
        </div>
    )
}
export default MovieCard;