import React from "react";
import './styles/App.scss';
import './apiCalls'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AllMovies from "./Components/AllMovies/AllMovies";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import Error from './Components/Error/Error'
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

  cleanAllMovies = (data) => {
    return data.movies.map(movie => {
      movie.average_rating = (movie.average_rating/2).toFixed(1);
      movie.release_date = new Date(movie.release_date).toLocaleDateString("en-US", {year: "numeric", month:"2-digit", day:"2-digit"})
      return movie
    })
  }

  componentDidMount() {
    getAllMovies()
    .then(data =>  {
      this.setState({movies: this.cleanAllMovies(data)})
    })
    .catch(error => this.setState({err: `${error}`}))
  }

  selectMovie = (error) => {
    this.setState({err: `${error}` })
  }

  render() {
    console.log('state on app', this.state)
    return (
        <main>
        <Header />
          {/* <Route path="/" render={() => <AllMovies movies={this.state.movies} error ={this.state.err}/>}/> */}
          <Route path="/" render={() => <AllMovies movies={this.state.movies} error ={this.state.err}/>}/>
          <Route path="/:id" render={({match}) => {
            console.log('single movie match', this.state, match)
            // const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
            // console.log('movieToRender', movieToRender)
            return <SingleMovie id={match.params.id} selectMovie={this.selectMovie}/>
          }} />
        <Footer />
      </main>
    )
  }
}

export default App;

// Need to make the below error message display using Route

// {this.state.err && <section className="error"><h2 className="error-message">{this.state.err}</h2></section>}
