import React from "react";
import {Modal, useModal} from 'react-top-modal';
import './styles/App.scss';
import movieTestData from './movieTestData';
import Header from './Components/Header/Header'
import AllMovies from "./Components/AllMovies/AllMovies";
import SingleMovie from "./Components/SingleMovie/SingleMovie";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieTestData.movies,
      currentMovie: null,
      error: ''
    }
  }

  selectMovie = (id) => {
    console.log(id);
    const foundMovie = this.state.movies.find(movie => movie.id === id);
    
    this.setState({ currentMovie: foundMovie });
  }

  closeSelectMovie = () => {
    this.setState({ currentMovie: null });
  }

  render() {
    // const [show, setShow] = React.useState(false);
    return (
      // console.log(SingleMovie)
      <main>
        <Header />
        {this.state.currentMovie && <SingleMovie closeSelectMovie={this.closeSelectMovie} />}
        <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} />
      </main>
      
    )
  }
}

export default App;
