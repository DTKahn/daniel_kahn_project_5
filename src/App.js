import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // Result of the actor search
      searchResults: [],

      // Information on actor1
      actor1: {},

      // Information on actor2
      actor2: {},

      // Initually contain all of the films from actor 1 and actor 2
      //// Then will be filtered for movies which have both actor1 and actor2
      movies: []

    }
  }
  
  componentDidMount(){

    Axios({
      url: `https://api.themoviedb.org/3/search/person`,
      params: {
        api_key: `972b4433f3e8f302aee3055dd209330c`,
        query: 'Robert Elliott'
      }
    })
      .then((res) => {
        console.log('res: ',res)
        this.setState({
          searchResults: res.data.results
        });
      });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie Match</h1>
        </header>
      </div>
    );
  }
}

export default App;


// Get input from user for 2 actors
// // if more than one is returned show photo and allow them to select the right one

// Send search to themovieDB and get list of movies for each

// Compare list of movies and return matches

// For each matching movie get each of the input actors roles

// For each match display movie name, poster, and roles of each actor
