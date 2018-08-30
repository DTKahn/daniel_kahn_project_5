// Holds the divs where actors are searched and selected

import React from 'react';
import SelectPerson from './SelectPerson';

const SearchSelect = (props) => {
    return (
        <div>
            <SelectPerson number='1' searchActor={props.searchActor} />
            <SelectPerson number='2' searchActor={props.searchActor}/>
        </div>
    )
};

export default SearchSelect;