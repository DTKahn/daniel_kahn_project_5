import React from 'react';

const DisplayMatchingMovies = props => {
    if(props.movies){
        return (
            <div className="displayMovies">
                
                { 
                    props.movies[0].movieId
                    ?
                    <div className="displayMoviesHeaders">
                        <h3>Character</h3>
                        <h3>Movie</h3>
                        <h3>Character</h3>
                    </div>
                    :
                    null
                }
                    
                
                <ul>
                    {props.movies.map(movie => {
                        return(
                            <li key={movie.movieId} className="movieLi">
                                {
                                    movie.movieId
                                    ?
                                    <div className="actor1">
                                        
                                        <h2>{props.actor1.name}</h2>

                                        {/* Check that there is content in the related actor#role state */}
                                        <p className="character">{movie.actor1Role ? movie.actor1Role : `Acting credit – no character name available`}</p>
                                    </div>
                                    :
                                    null
                                }
                                

                                <div className={movie.movieId ? `movie` : `movie noMovies`}>
                                    <h2 className="movieTitle">{movie.movieName}</h2>

                                    {
                                        movie.moviePoster 
                                        ? 
                                        <div className="moviePoster">
                                                <img src={`https://image.tmdb.org/t/p/w1280${movie.moviePoster}`} alt={`Movie poster for ${movie.movieName}`}/>
                                        </div>
                                        :
                                        null
                                    }

                                    {
                                        movie.overview
                                        ?
                                        <p className="movieDescription">{movie.overview}</p>
                                        :
                                        null
                                    }
                                </div>

                                {
                                    movie.movieId
                                    ?
                                    <div className="actor2">

                                        <h2>{props.actor2.name}</h2>

                                        {/* Check that there is content in the related actor#role state */}
                                        <p className="character">{movie.actor2Role ? movie.actor2Role : `Acting credit – no character name available`}</p>
                                    </div>
                                    :
                                    null
                                }

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