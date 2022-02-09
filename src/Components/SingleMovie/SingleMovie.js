import React from 'react';
import './SingleMovie.scss';
import ReactStars from 'react-stars';
// import Modal, { useModal } from 'react-top-modal';
import {Link} from 'react-router-dom';

const SingleMovie = (props) => {
  console.log('single movie prop', props)

  // const movieId = props.currentMovie.id;

  const banner = props.currentMovie.backdrop_path.includes('NoPhotoAvailable') ? props.currentMovie.poster_path : props.currentMovie.backdrop_path;
  
  const overview = props.currentMovie.overview === "" ? 'No overview available.' : props.currentMovie.overview;

  let dateProvided = props.currentMovie.release_date.split('-');
  let [year, month, day] = dateProvided;
  const releaseDate = [month, day, year].join('/');

  const budgetProvided = props.currentMovie.budget;
  let budgetDollars = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(budgetProvided);

  let budget = props.currentMovie.budget === 0 ? 'n/a' : `$${budgetDollars}`;

  const revenueProvided = props.currentMovie.revenue;
  let revenueDollars = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(revenueProvided);

  let revenue = props.currentMovie.revenue === 0 ? 'n/a' : `$${revenueDollars}`;

  let runtime = props.currentMovie.runtime === 0 ? 'n/a' : `${props.currentMovie.runtime} minutes`;

  const showBlur = () => {
    document.querySelector('.movie-container').classList.add('blur')
    document.querySelector('body').classList.add('blur')
  }

  const removeBlur = () => {
    document.querySelector('.movie-container').classList.remove('blur')
    document.querySelector('body').classList.remove('blur')
  }

  React.useEffect(() => {
    document.body.addEventListener('keydown', props.closeOnEscapeKey)
    showBlur()
    return function cleanup() {
      removeBlur()
      document.body.removeEventListener('keydown', props.closeOnEscapeKey)
    }
  }, [])


  return (
    // <Link to={`/${props.currentMovie.id}`}>
      <div className='modal'>
        <article className='modal-wrapper'>
          <section className='modal-top'>
            <button className='close-button' onClick = {() => props.closeSelectMovie()}>X</button>
            <img className='banner' src={banner} alt={`Scene from "${props.currentMovie.title}"` }/>
            <div className='movie-info'>
              <h4 className="movie-title">{props.currentMovie.title}</h4>
              <p className="tagline">{props.currentMovie.tagline}</p>
              <div className='rating-container'>
                <ReactStars className='star-rating' count={5} value={props.currentMovie.average_rating/2} size={16} color2={'#ffd700'} color1={'#F2F2F2'} edit={false}/>
                <span className="rating">{(props.currentMovie.average_rating/2).toFixed(1)}</span>
              </div>
            </div>
          </section>
          <section className='modal-bottom'>
            <div className='movie-overview'>
              <p className="modal-title">Overview</p>
              <p className="modal-text">{overview}</p>
            </div>
            <div className="movie-details">
              <p className="modal-title">Release Date: <span className="modal-text">{releaseDate}</span></p>
              <p className="modal-title">Budget: <span className="modal-text">{budget}</span></p>
              <p className="modal-title">Revenue: <span className="modal-text">{revenue}</span></p>
              <p className="modal-title">Runtime: <span className="modal-text">{runtime}</span></p>
            </div>
          </section>
        </article>
      </div>
    // </Link>
  )
};

export default SingleMovie;
