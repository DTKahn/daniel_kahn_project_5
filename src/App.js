import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import SearchSelect from './components/SearchSelect/SearchSelect';



const apiKey = `972b4433f3e8f302aee3055dd209330c`;

const apiUrl = `https://api.themoviedb.org/3`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      
      // Result of the actor search for actor 1
      searchResultsActor1: {},

      // Result of the actor search for actor 2
      searchResultsActor2: {},

      // Initually contain all of the films from actor 1 and actor 2
      //// Then will be filtered for movies which have both actor1 and actor2
      movies: []

    }
  }
  
  searchActor = (actorNumber, userInput) => {
    // console.log(`getActor fired for ${actorNumber}, userInput: ${userInput}`);
    
    Axios({
      url: `${apiUrl}/search/person`,
      params: {
        api_key: apiKey,
        query: userInput
      }
    })
    .then((res) => {
      // console.log('set state with res: ', res.data.results);

      // Array of popularity values to get the top actor (or stretch-goals, top-3)
      const popularityKeys = res.data.results.map(actor => {
        
        // Get the popularity of each actor
        return(
          actor.popularity
        );
      })

      const mostPopularActor = res.data.results.filter(actor => {
        return actor.popularity === Math.max(...popularityKeys);
      });

      this.setState({
        [`searchResultsActor${actorNumber}`]: mostPopularActor[0]
      });
    });
  }

  // Gets list of movies an actor has been in
  getActorMovies = (actorId) => {

    return Axios({
      url: `${apiUrl}/person/${actorId}/movie_credits`,
      params: {
        api_key: apiKey
      }
    });

  }

  // Gets the movies both actors are in and returns an array of objects
  getGetMatchingMovies = async (actorId1, actorId2) => {
    const actor1Movies = await this.getActorMovies(actorId1);
    const actor2Movies = await this.getActorMovies(actorId2);

    // Return array of movies with both actors as objects
    // {
    //   actor1Role: ,
    //   actor2Role: ,
    //   movieName: ,
    //   moviePoster: ,
    // }

    console.log('Actor 1 Movies: ', actor1Movies);
    console.log('Actor 2 Movies: ', actor2Movies);

  }

  componentDidMount(){
    this.getGetMatchingMovies(2157, 10989)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie Match</h1>
        </header>
        <div>
          <SearchSelect searchActor={this.searchActor} actor1={this.state.searchResultsActor1} actor2={this.state.searchResultsActor1}/>
        </div>
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
