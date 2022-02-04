import React from 'react';
import Card from '../Card/Card'
import './AllMovies.scss';

const AllMovies = (props) => {
  // console.log(props)
  const movieCards = props.movies.map(movie => {
    return(
      <Card
        key= {movie.id}
        id= {movie.id}
        poster_path= {movie.poster_path}
        backdrop_path= {movie.backdrop_path}
        title= {movie.title}
        average_rating= {movie.average_rating}
        release_date= {movie.release_date}
        selectMovie = {props.selectMovie}
      />
    )
  })

  return(
    <section className="movie-container">
      {movieCards}
    </section>
  )
  
}



export default AllMovies;