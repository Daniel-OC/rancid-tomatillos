import React from 'react';
import ReactStars from 'react-stars';
import './Card.scss';
import {Link} from 'react-router-dom';

const Card = (props) => {
  // console.log('id on Card', props.id)
  const averageRating = Number(props.average_rating);

  return (
      <Link to={`/${props.id}`} className='movie-wrapper'>
          <img className='thumbnail' src={props.poster_path} alt={`"${props.title}" poster`}/>
          <div className='description-container'>
            <h2>{props.title}</h2>
            <div className='rating-container'>
              <ReactStars className='star-rating' count={5} value={averageRating} size={18} color2={'#ffd700'} color1={'#0D0D0D'} edit={false} />
              <p>{props.average_rating}</p>
            </div>
            <button className='info-button'>More Info</button>
          </div>
      </Link>
  )
}

export default Card;