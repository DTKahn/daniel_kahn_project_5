// Holds the divs where actors are searched and selected

import React from 'react';
import SelectPerson from './SelectPerson';

const SearchSelect = (props) => {
    console.log('Search Select Actor Data 1: ', props.actor1);
    console.log('Search Select Actor Data 2: ', props.actor2);
    

    return (
        <div>
            <SelectPerson number='1' searchActor={props.searchActor} actorData={props.actor1}/>
            <SelectPerson number='2' searchActor={props.searchActor} actorData={props.actor2}/>
        </div>
    )
};

export default SearchSelect;