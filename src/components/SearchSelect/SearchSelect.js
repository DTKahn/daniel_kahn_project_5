// Holds the divs where actors are searched and selected

import React from 'react';
import SelectPerson from './SelectPerson';

const SearchSelect = (props) => {
    return (
        <div>
            <SelectPerson number='1' searchActor={props.searchActor} actorData={props.actor1}/>
            <SelectPerson number='2' searchActor={props.searchActor} actorData={props.actor2}/>
        </div>
    )
};

export default SearchSelect;