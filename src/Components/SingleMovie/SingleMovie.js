import React from 'react';
import './SingleMovie.scss';
import ReactStars from 'react-stars';
// import Modal, { useModal } from 'react-top-modal';

const SingleMovie = (props) => {
  console.log(props)
  // if (!props.show) {
  //   return null;
  // }

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
    <div className='modal'>
      <article className='modal-wrapper'>
        <section className='modal-top'>
          <button className='close-button' onClick = {() => props.closeSelectMovie()}>X</button>
          <img className='banner' src={props.currentMovie.backdrop_path} alt={`Scene from "${props.currentMovie.title}"` }/>
          <div className='movie-info'>
            <h4 className="movie-title">{props.currentMovie.title}</h4>
            <p className="tagline">{props.currentMovie.tagline}</p>
            <div className='rating-container'>
              <ReactStars className='star-rating' count={5} value={props.currentMovie.average_rating/2} size={16} color2={'#ffd700'} color1={'#F2F2F2'} edit={false}/>
              <span className="rating">{(props.currentMovie.average_rating/2).toFixed(1)}
              </span>
            </div>
          </div>
        </section>
        <section className='modal-bottom'>
          <p className="modal-text">{props.currentMovie.overview}</p>
          <div className="movie-details">
            <p className="modal-title">Release Date: <span className="modal-text">{(props.currentMovie.release_date)}</span></p>
            <p className="modal-title">Budget: <span className="modal-text">{props.currentMovie.budget}</span></p>
            <p className="modal-title">Revenue: <span className="modal-text">{props.currentMovie.revenue}</span></p>
            <p className="modal-title">Run Time: <span className="modal-text">{props.currentMovie.runtime}</span></p>
          </div>
        </section>
      </article>
    </div>

    
  )
};

export default SingleMovie;
