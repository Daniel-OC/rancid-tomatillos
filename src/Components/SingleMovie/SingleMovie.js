import React from 'react';
import './SingleMovie.scss';
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
        <button className='close-button' onClick = {() => props.closeSelectMovie()}>X</button>
        <img className='banner' src={props.currentMovie.backdrop_path} alt={`Scene from "${props.currentMovie.title}"`}/>
        <div className='movie-details'>
          <h4 className="movie-title">{props.currentMovie.title}</h4>
          <p className="tagline">{props.currentMovie.tagline}</p>
          <p className="modal-text">{props.currentMovie.overview}</p>
            <p className="modal-title">Average Rating: <span className="modal-text">{(props.currentMovie.average_rating/2).toFixed(1)}</span></p>
          <div className="movie-specs">
            <p className="modal-title">Release Date: <span className="modal-text">{(props.currentMovie.release_date)}</span></p>
            <p className="modal-title">Run Time: <span className="modal-text">{props.currentMovie.runtime}</span></p>
            <p className="modal-title">Budget: <span className="modal-text">{props.currentMovie.budget}</span></p>
            <p className="modal-title">Revenue: <span className="modal-text">{props.currentMovie.revenue}</span></p>
          </div>
        </div>
      </article>
    </div>

    
  )
};

export default SingleMovie;
