import React from "react";
import {Modal, useModal} from 'react-top-modal';
import './styles/App.scss';
import './apiCalls'
// import movieTestData from './movieTestData';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AllMovies from "./Components/AllMovies/AllMovies";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import { getAllMovies, getSingleMovie } from "./apiCalls";
import {Route, Switch} from "react-router-dom"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null,
      err: ''
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data =>  this.setState({movies: data.movies}))
    .catch(error => this.setState({err: `${error}`}))
    // .catch(error => console.log(error))
  }

  selectMovie = (id) => {
    console.log('selectMovie id', id);
    const foundMovie = getSingleMovie(id)
    .then(data => this.setState({currentMovie: data.movie}))
    .catch(error => this.setState({err: `${error}`}))
  }

  closeSelectMovie = () => {
    this.setState({ currentMovie: null });
  }

  closeOnEscapeKey = (event) => {
    if ((event.charCode || event.keyCode) === 27) {
      this.closeSelectMovie()
    }
  }

  render() {
    return (
      // console.log(SingleMovie)
      <main>
        <Header />
        <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} />
          <Route path="/" render={() => <AllMovies movies={this.state.movies} selectMovie={this.selectMovie}/>} /> 
          <Route path="/:id" render={({ match }) => {
            console.log('single movie match', match)
            const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))

            console.log('movieToRender', movieToRender)
            return <SingleMovie {...movieToRender} />
          }} />
        {this.state.currentMovie && <SingleMovie closeSelectMovie={this.closeSelectMovie} closeOnEscapeKey={this.closeOnEscapeKey} currentMovie={this.state.currentMovie} />}
        <Footer />
      </main>
      
    )
  }
}

export default App;

// Need to make the bellow error message display using Route

// {this.state.err && <section className="error"><h2 className="error-message">{this.state.err}</h2></section>}



// Open and close modal conditional rendering below

// {this.state.currentMovie && <SingleMovie closeSelectMovie={this.closeSelectMovie} closeOnEscapeKey={this.closeOnEscapeKey} currentMovie={this.state.currentMovie} />}