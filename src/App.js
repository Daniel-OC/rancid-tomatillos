import React from "react";
import './styles/App.scss';
import movieTestData from './movieTestData';
import Header from './Components/Header/Header'

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
      <Header />
    )
  }
}

export default App;
