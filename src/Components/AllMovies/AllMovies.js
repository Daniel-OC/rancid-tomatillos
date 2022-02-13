import React from 'react';
import Card from '../Card/Card'
import Error from '../Error/Error';
import './AllMovies.scss';

const AllMovies = (props) => {
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
      />
    )
  })

  return(
    !props.error?
    <section className='movie-container'>
      {movieCards}
    </section>
    :
    <Error error={props.error}/>
  ) 
}

export default AllMovies;