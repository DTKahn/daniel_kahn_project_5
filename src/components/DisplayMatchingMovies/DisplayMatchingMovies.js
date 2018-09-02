import React from 'react';
import IndividualMovie from './IndividualMovie';

const DisplayMatchingMovies = props => {
    return (
        <div>
            <ul>
                <IndividualMovie />
            </ul>
        </div>
    )
}

export default DisplayMatchingMovies;