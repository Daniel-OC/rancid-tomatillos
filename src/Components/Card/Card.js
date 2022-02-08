import React from 'react';
import ReactStars from 'react-stars';
import './Card.scss';

const Card = (props) => {
  // const [show, setShow] = React.useState(false);
  // console.log(props)
  return (
    <article className='movie-wrapper' onClick ={ () => props.selectMovie(props.id) }>
      <img className='thumbnail' src={props.poster_path} alt={`"${props.title}" poster`}/>
      <div className='description-container'>
        <h4>{props.title}</h4>
        <div className='rating-container'>
          <ReactStars className='star-rating' count={5} value={props.average_rating} size={16} color2={'#ffd700'} color1={'#0D0D0D'} edit={false} />
          <p>{props.average_rating}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;