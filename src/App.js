import React from "react";
import {Modal, useModal} from 'react-top-modal';
import './styles/App.scss';
import './apiCalls'
import movieTestData from './movieTestData';
import Header from './Components/Header/Header'
import AllMovies from "./Components/AllMovies/AllMovies";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import { getAllMovies, getSingleMovie } from "./apiCalls";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null,
      error: ''
    }
  }

  componentDidMount() {
    getAllMovies().then(data =>  this.setState({movies: data.movies}))
  }

  selectMovie = (id) => {
    console.log(id);
    const foundMovie = getSingleMovie(id).then(data => this.setState({currentMovie: data.movie}))
  }

  closeSelectMovie = () => {
    this.setState({ currentMovie: null });
  }

  closeOnEscapeKey = (event) => {
    if((event.charCode || event.keyCode) === 27) {
      this.closeSelectMovie()
    }
  }

  render() {
    // const [show, setShow] = React.useState(false);
    return (
      // console.log(SingleMovie)
      <main>
        <Header />
        {this.state.currentMovie && <SingleMovie closeSelectMovie={this.closeSelectMovie} closeOnEscapeKey={this.closeOnEscapeKey} currentMovie={this.state.currentMovie} />}
        <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} />
        {/* {!this.state.currentMovie && <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} />} */}
      </main>
      
    )
  }
}

export default App;
