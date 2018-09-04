// Holds the divs where actors are searched and selected

import React from 'react';
import SelectPerson from './SelectPerson';

const SearchSelect = (props) => {
    return (
        <div className="searchSelect">
            <SelectPerson 
                number='1' 
                searchActor={props.searchActor} 
                actorData={props.actor1}
            />

            
            <button
                disabled={props.actor1.id && props.actor2.id ? false : true} 
                className="showMatches"
                onClick={() => { props.getMatchingMovies(props.actor1.id, props.actor2.id) }}>
                {props.actor1.id && props.actor2.id ? 'Click to Show Matches!' : 'Search 2 actors to enable match'}
                    
                    
            </button>
            
            <SelectPerson 
                number='2' 
                searchActor={props.searchActor} 
                actorData={props.actor2}
            />
        
        </div>
    )
};

export default SearchSelect;