import React from 'react';
import './Card.scss'

const Card = (props) => {
  console.log(props)
  return (
    <article class="movie-wrapper">
      <img class="thumbnail" src={props.poster_path}/>
      <div class="description-container">
        <h4>{props.title}</h4>
        <p>Average Rating: {props.average_rating}</p>
      </div>
    </article>
  )
}

export default Card;