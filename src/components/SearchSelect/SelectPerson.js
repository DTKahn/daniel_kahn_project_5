// Holds the divs where actors are searched and selected

import React from 'react';
import Search from './Search';
import DisplayActorSearchResult from './DisplayActorSearchResult';

const SearchSelect = (props) => {
    return (
        <div>
            <h2>Actor {props.number}</h2>

            <Search number={props.number} searchActor={props.searchActor}/>
            
            {/* Only displays component if there is content in the related actor state in App.js */}
            {props.actorData.noSearch ? null : <DisplayActorSearchResult actorData={props.actorData} />}
            
        </div>
    )
};

export default SearchSelect;