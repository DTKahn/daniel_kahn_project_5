// Search for each actor
// Using class as it's a form and I'm going to need to handle the state of the form

import React, { Component } from 'react';

class Search extends Component {
    // constructor() {
    //     super();

    // }

    handleSubmit = e => {
        
        // Prevent the page from refreshing when the form is submitted
        e.preventDefault();

        this.props.getActor(this.props.number);

        console.log('this: ', this);
        


    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Actor {this.props.number} Search</label>
                <input type="text"/>
    
                <button>Go!</button>
            </form>
        );
    }
}


export default Search;