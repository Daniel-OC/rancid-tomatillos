import React from "react";
import SingleMovie from "../SingleMovie/SingleMovie";
import '../../apiCalls'
import { getSingleMovie } from "../../apiCalls";

class SingleMovieCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMovie: null,
    }
  }

  selectMovie = (id) => {
    console.log('select movie id', id);
    const foundMovie = getSingleMovie(id)
    .then(data => this.setState({currentMovie: data.movie}))
    .catch(error => this.setState({err: `${error}`}))
  }

  componentDidMount() {
    console.log()
    this.selectMovie(this.state.movieId)
  }

}

export default SingleMovieCheck;

