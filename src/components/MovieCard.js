import React from 'react';
import Rating from 'react-rating';

const renderMovie = ({movies}) => {
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
                        <Rating emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                fractions={2}
                                className="movie-card-rating" />
                    </div>
                </div>
            )
        })
        )
    }
} 

const MovieCard = (props) => {
    return(
        <div className="movie-card-container">{renderMovie(props)}</div>
    )
}

export default MovieCard;