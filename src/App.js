import React from "react";
import './styles/App.scss';
import movieTestData from './movieTestData';
import Header from './Components/Header/Header'
import AllMovies from "./Components/AllMovies/AllMovies";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieTestData.movies,
      currentMovie: null,
      error: ''
    }
  }

  render() {
    return (
      <main>
        <Header />
        <AllMovies movies={this.state.movies}/>
      </main>
      
    )
  }
}

export default App;
