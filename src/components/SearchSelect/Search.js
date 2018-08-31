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
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Actor {this.props.number} Search</label>
                
                <input type="text" onChange={this.handleChange} value={this.state.currentTextValue}/>
    
                <button>Go!</button>
            </form>
        );
    }
}


export default Search;