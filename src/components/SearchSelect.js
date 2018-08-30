// Holds the divs where actors are searched and selected

import React from 'react';
import SelectPerson from './SelectPerson';

const SearchSelect = (props) => {
    return (
        <div>
            <SelectPerson number='1' getActor={props.getActor} />
            <SelectPerson number='2' getActor={props.getActor}/>
        </div>
    )
};

export default SearchSelect;