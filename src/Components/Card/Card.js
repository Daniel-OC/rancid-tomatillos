import React from 'react';
import './Card.scss'

const Card = (props) => {
  // const [show, setShow] = React.useState(false);
  // console.log(props)
  return (
    <article className='movie-wrapper' onClick ={ () => props.selectMovie(props.id) }>
      <img className='thumbnail' src={props.poster_path}/>
      <div className='description-container'>
        <h4>{props.title}</h4>
        <p>Average Rating: {props.average_rating}</p>
      </div>
    </article>
  )
}

export default Card;