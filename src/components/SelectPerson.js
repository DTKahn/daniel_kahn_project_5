// Holds the divs where actors are searched and selected

import React from 'react';
import Search from './Search';

const SearchSelect = (props) => {
    return (
        <div>
            <h2>Select Actor {props.number}</h2>

            <Search number={props.number} getActor={props.getActor}/>
            
        </div>
    )
};

export default SearchSelect;