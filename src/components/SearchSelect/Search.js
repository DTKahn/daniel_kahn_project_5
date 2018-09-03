// Search for each actor
// Using class as it's a form and I'm going to need to handle the state of the form

import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            currentTextValue: ''
        }
    }

    handleChange = (e) => {
        // .target get to the target which is the text

        // console.dir(e.target.value);

        this.setState({
            currentTextValue: e.target.value
        });
    }

    handleSubmit = e => {
        
        // Prevent the page from refreshing when the form is submitted
        e.preventDefault();

        this.props.searchActor(this.props.number, this.state.currentTextValue);

        this.setState({
            currentTextValue: ''
        });
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                {/* Version 1 – includes actor number. Leaving for now, but will probably delete. */}
                {/* <label htmlFor="search">Actor {this.props.number} Search</label> */}
                
                <label htmlFor="search">Search</label>
                
                <input required type="text" onChange={this.handleChange} value={this.state.currentTextValue}/>
    
                <button>Search</button>
            </form>
        );
    }
}


export default Search;