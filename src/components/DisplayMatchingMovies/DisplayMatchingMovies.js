import React from 'react';

const DisplayMatchingMovies = props => {
    if(props.movies){
        return (
            <div className="displayMovies">
                
                <div className="displayMoviesHeaders">
                    <h3>Character</h3>
                    <h3>Movie</h3>
                    <h3>Character</h3>
                </div>
                
                <ul>
                    {props.movies.map(movie => {
                        return(
                            <li key={movie.movieId} className="movieLi">
                                <div className="actor1">
                                    
                                    <h2>{props.actor1.name}</h2>

                                    {/* Check that there is content in the related actor#role state */}
                                    <p>{movie.actor1Role ? movie.actor1Role : `Acting credit – no character name available`}</p>
                                </div>

                                <div className="movie">
                                    <div className="moviePoster">
                                        {
                                            movie.moviePoster
                                            ?
                                            <img src={`https://image.tmdb.org/t/p/w1280${movie.moviePoster}`} alt={`Movie poster for ${movie.movieName}`}/>
                                            :
                                            <p>No movie poster available</p>
                                        }
                                    </div>
                                    <h2 className="movieTitle">{movie.movieName}</h2>
                                    <p className="movieDescription">{movie.overview}</p>
                                </div>

                                <div className="actor2">
                                    <h2>{props.actor2.name}</h2>
                                    <p>{movie.actor2Role ? movie.actor2Role : `Acting credit – no character name available`}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else {
        return null;
    }
}

export default DisplayMatchingMovies;