// Displays the actor from search

import React from 'react';

const DisplayActorSearchResult = (props) => {
    
    // If there is an id in props.actorData.id then display the actor
    // Else display the no actor found div
    if(props.actorData.id){
        return (
            <div>
                {/* Name */}
                <h2>{props.actorData.name}</h2>
                
                {/* Headshot */}
                <div className="headShot">
                    <img src={`https://image.tmdb.org/t/p/w1280${props.actorData.profile_path}`} alt={`${props.actorData.name}`}/>
                </div>
                
    
                {/* Known For */}
                <ul>
                    
                    {/* li with title of each known for movie */}
                    {/* Ternary waits for prop to have content before running the map */}
                    {
                        props.actorData.known_for
                        ?
                        props.actorData.known_for.map(movie => {
                            return <li key={movie.id}>{movie.title}</li>;
                        })
                        : 
                        null
                    }
                    
                </ul>
    
            </div>
        );
    }
    else {
        return (
            <div className="noActor">
                <p>No actor found, please search again.</p>
            </div>
        );
    };
    
    
};

export default DisplayActorSearchResult;