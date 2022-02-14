import React from 'react';
import './styles/App.scss';
import './apiCalls'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AllMovies from './Components/AllMovies/AllMovies';
import SingleMovie from './Components/SingleMovie/SingleMovie';
import { getAllMovies } from './apiCalls';
import { Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null,
      err: '',
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data =>  {
      this.setState({movies: this.cleanAllMovies(data)})
    })
    .catch(error => this.setState({err: `${error}`}))
  }

  cleanAllMovies = (data) => {
    return data.movies.map(movie => {
      movie.average_rating = (movie.average_rating/2).toFixed(1);
      movie.release_date = new Date(movie.release_date).toLocaleDateString('en-US', {year: 'numeric', month:'2-digit', day:'2-digit'})
      return movie
    })
  }

  setError = (error) => {
    this.setState({err: `${error}` })
  }

  toggleButton = () => {
    const movieContainer = document.querySelector('.movie-container');
    const movieWrappers = document.querySelectorAll('.movie-wrapper');
    const descriptionContainers = document.querySelectorAll('.description-container');
    const toggleButton = document.querySelector('.toggle-button');

    toggleButton.innerText === "Grid View" ? toggleButton.innerText = "List View" : toggleButton.innerText = "Grid View"
    
    movieContainer.classList.toggle('grid');
    movieWrappers.forEach(wrapper => wrapper.classList.toggle('no-columns'));
    descriptionContainers.forEach(container => container.classList.toggle('hide'));
  }

  render() {
    return (
        <main>
        <Header />
          <Route path='/' render={() => <AllMovies movies={this.state.movies} error={this.state.err} toggleButton={this.toggleButton}/>}/>
          <Route path='/:id' render={({match}) => {
            return <SingleMovie id={match.params.id} setError={this.setError} />
          }} />
        <Footer />
      </main>
    )
  }
}

export default App;

