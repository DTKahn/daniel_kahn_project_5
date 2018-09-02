import React from 'react';

const DisplayMatchingMovies = props => {
    return (
        <div>
            <button>Show Matches!</button>
            <ul>
                {/* Ternary waits for prop to have content before running the map */}
                {
                    props.movies
                    ?
                    props.movies.map(movie => {
                        return(
                            <li className="movieLi">
                                <div className="actor1">
                                    <h2>{props.actor1.name}</h2>
                                    <p>{movie.actor1Role}</p>
                                </div>

                                <div className="movie">
                                    <div className="moviePoster">
                                        <img src={`https://image.tmdb.org/t/p/w1280${movie.moviePoster}`} alt=""/>
                                    </div>
                                    <h2 className="movieTitle">{movie.movieName}</h2>
                                    <p className="movieDescription">{movie.overview}</p>
                                </div>

                                <div className="actor2">
                                    <h2>{props.actor2.name}</h2>
                                    <p>{movie.actor2Role}</p>
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