// Holds the divs where actors are searched and selected

import React from 'react';
import Search from './Search';
import DisplayActorSearchResult from './DisplayActorSearchResult';

const SearchSelect = (props) => {
    return (
        <div>
            <h2>Select Actor {props.number}</h2>

            <Search number={props.number} searchActor={props.searchActor}/>
            
            <DisplayActorSearchResult actorData={props.actorData} />
            
        </div>
    )
};

export default SearchSelect;