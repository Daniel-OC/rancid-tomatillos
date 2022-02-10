import React from "react";
import './styles/App.scss';
import './apiCalls'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AllMovies from "./Components/AllMovies/AllMovies";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import { getAllMovies, getSingleMovie } from "./apiCalls";
import { Route } from "react-router-dom"

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
  }

  selectMovie = (id) => {
    console.log('selectMovie id', id);
    getSingleMovie(id)
    .then(data => this.setState({currentMovie: data.movie}))
    .catch(error => this.setState({err: `${error}`}))
  }

  render() {
    return (
        <main>
        <Header />
        <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} />
          <Route path="/" render={() => <AllMovies movies={this.state.movies} selectMovie={this.selectMovie}/>} /> 
          <Route path="/:id" render={({match}) => {
            // console.log('single movie match', match)
            // const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
            // console.log('movieToRender', movieToRender)
            return <SingleMovie id={match.params.id} />
          }} />
        <Footer />
      </main>
    )
  }
}

export default App;

// Need to make the below error message display using Route

// {this.state.err && <section className="error"><h2 className="error-message">{this.state.err}</h2></section>}
