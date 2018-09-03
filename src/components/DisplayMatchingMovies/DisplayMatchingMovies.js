import React from 'react';

const DisplayMatchingMovies = props => {
    return (
        <div>
            <button onClick={() => {props.getMatchingMovies(props.actor1.id, props.actor2.id)}}>Show Matches!</button>
            <ul>
                {/* Ternary waits for prop to have content before running the map */}
                {
                    props.movies
                    ?
                    props.movies.map(movie => {
                        console.log('Movie Poster: ', movie.moviePoster);
                        
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
                    })
                    :
                    null
                }
            </ul>
        </div>
    )
}

export default DisplayMatchingMovies;