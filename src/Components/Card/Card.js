import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './Card.scss';
import {Link} from 'react-router-dom';

const Card = (props) => {
  const averageRating = Number(props.average_rating);

  return (
      <Link to={`/${props.id}`} className='movie-wrapper' data-toggle='modal' data-target='#openModal'>
      <img className='thumbnail' src={props.poster_path} alt={`"${props.title}" poster`}/>
      <div className='description-container'>
        <h2 tabIndex='0'>{props.title}</h2>
        <div className='rating-container' tabIndex='0'>
          <ReactStars className='star-rating' count={5} value={averageRating} isHalf={true} size={22} activeColor={'#ffd700'} color={'#fbfbfb45'} edit={false} area-hidden='true'/>
          <p>{props.average_rating}</p>
        </div>
        <button className='info-button' title={`'More info about ${props.title}'`}>More Info</button>
      </div>
      </Link>
  )
}

export default Card;