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
        <img className='banner' src={props.currentMovie.backdrop_path}/>
        <div className='description-container'>
          <h4>{props.currentMovie.title}</h4>
          <p>Release Date: {(props.currentMovie.release_date)}</p>
          <p>Average Rating: {(props.currentMovie.average_rating/2).toFixed(1)}</p>
        </div>
      </article>
    </div>

    
  )
};

export default SingleMovie;
