import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
