import React from 'react';
import './SingleMovie.scss';
// import Modal, { useModal } from 'react-top-modal';

const SingleMovie = (props) => {
  console.log(props)
  // if (!props.show) {
  //   return null;
  // }

  React.useEffect(() => {
    document.body.addEventListener('keydown', props.closeOnEscapeKey)
    return function cleanup() {
      document.body.removeEventListener('keydown', props.closeOnEscapeKey)
    }
  }, [])

  return (
    <div className='modal'>
      <article className='modal-wrapper'>
        <img className='banner' src={props.currentMovie.backdrop_path}/>
        <div className='description-container'>
          <h4>{props.currentMovie.title}</h4>
          <p>Average Rating: {(props.currentMovie.average_rating/2).toFixed(1)}</p>
          <button className='close-button' onClick ={ () => props.closeSelectMovie()}>Close</button>
        </div>
      </article>
    </div>

    
  )
};

export default SingleMovie;
