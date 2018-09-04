import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Axios from 'axios';
import SearchSelect from './components/SearchSelect/SearchSelect';
import DisplayMatchingMovies from './components/DisplayMatchingMovies/DisplayMatchingMovies';

const apiKey = `972b4433f3e8f302aee3055dd209330c`;

const apiUrl = `https://api.themoviedb.org/3`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      
      // Result of the actor search for actor 1
      searchResultsActor1: { noSearch: true },

      // Result of the actor search for actor 2
      searchResultsActor2: { noSearch: true },

      // Matching Movies for Actor 1 and 2
      movies: false
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


      if (mostPopularActor[0]){
        this.setState({
          [`searchResultsActor${actorNumber}`]: mostPopularActor[0],
          movies: false
        });
      }
      // If no actor is found in the search the state for the related actor is set with an object with noActorFound:true, which will be used to display an error message to the user
      else {
        this.setState({
          // Nothing is actually using noActorFound, but setting it so that it's clear what state the targeted actor is in. Occurs when a search has been made and no actor was found.
          [`searchResultsActor${actorNumber}`]: {noActorFound: true},
          movies: false

        });
      }
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
  
  // Gets the movies both actors are in and returns an array of objects of those movies
  getMatchingMovies = async (actorId1, actorId2) => {
    const actor1Movies = await this.getActorMovies(actorId1);
    const actor2Movies = await this.getActorMovies(actorId2);
    // console.log('Actor 1 Movies: ', actor1Movies);
    // console.log('Actor 2 Movies: ', actor2Movies);
    
    // Empty array for the ids of each movie each actor is in
    // Will be used to construct an array of movies ids which both actors were in
    const actor1MovieIds = []
    const actor2MovieIds = []
    
    // Actor 1 – Pushing movie ids into actor1MovieIds
    actor1Movies.data.cast.forEach(role => {
      actor1MovieIds.push(role.id)
    });
    
    // Actor 2 – Pushing movie ids into actor2MovieIds
    actor2Movies.data.cast.forEach(role => {
      actor2MovieIds.push(role.id)
    });
    
    // Creating a new array of movie IDs with movies both actors are in
    const matchingMoviesIds = actor1MovieIds.filter(id => actor2MovieIds.includes(id));
  
    // Create an array of objects with all of the movies from one of the actors
    //   Will be filtered using the matchingMoviesIds
    //   Format:
    //       {
    //       movieId: 12107,
    //       actor1Role: 'Professor Sherman Klump and various roles',
    //       actor2Role: '',
    //       movieName: 'Nutty Professor II: The Klumps',
    //       moviePoster: '/r1WXXXtpNBsgCnCTdjT6ERxOcEV.jpg',
    //       releaseDate: '2000-07-27'
    //       }
    const formatedMoviesArray = actor1Movies.data.cast.map((movie) => {
      
      return({
          movieId: movie.id,
          actor1Role: movie.character,
          movieName: movie.title,
          overview: movie.overview,
          moviePoster: movie.poster_path,
          releaseDate: movie.release_date
      });
    });
    
    // Filtering formatedMoviesArray to only contain movies from both actors
    const matchingFormatedMoviesArray = formatedMoviesArray.filter(movie => {
      return matchingMoviesIds.includes(movie.movieId);
    });
    
    // Add actor2's role to each movie in matchingFormatedMoviesArray
    matchingFormatedMoviesArray.forEach(movie => {

      const matchingMovie = actor2Movies.data.cast.find(actor2Movie => {
        return actor2Movie.id === movie.movieId;
      });

      return movie.actor2Role = matchingMovie.character;
    });

    // If there are matching movies, set state movies with array matchingFormatedMoviesArray
    // Else supply a no match message
    if (matchingFormatedMoviesArray[0]) {
      this.setState({
        movies: matchingFormatedMoviesArray
      });
    }
    else {
      this.setState({
        movies: [{
            actor1Role: "",
            actor2Role: "",
            movieId: "",
          movieName: `Sorry ${this.state.searchResultsActor1.name} and ${this.state.searchResultsActor2.name} have not done any movies together. Please try another pair of actors.`,
            moviePoster: "",
            overview: "",
            releaseDate: ""
          }]
      });
    };

    
  }

  // componentDidMount(){
  //   this.getMatchingMovies(51329, 72129)
  // }
  
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <div className="wrapper">
              
              <div className="title">
                <h1 className="App-title">Film Friends</h1>
                <h3 className="subHeader">Search for two actors and see what films they've been in together.</h3>
              </div>
              
              <SearchSelect 
                searchActor={this.searchActor} 
                actor1={this.state.searchResultsActor1} 
                actor2={this.state.searchResultsActor2}
                getMatchingMovies={this.getMatchingMovies}
              />

            </div> {/* End of Wrapper */}
          </header>

          <div>
            <div className="wrapper">
              <DisplayMatchingMovies 
                movies={this.state.movies} 
                actor1={this.state.searchResultsActor1} 
                actor2={this.state.searchResultsActor2}
              />
            </div> {/* End of Wrapper */}
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
