import React from 'react';
import './SingleMovie.scss';
// import Modal, { useModal } from 'react-top-modal';

const SingleMovie = (props) => {
  console.log(props)
  // if (!props.show) {
  //   return null;
  // }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Modal Title</h4>
        </div>
        <div className='modal-body'>
          <button className='close-button' onClick={ () => props.closeSelectMovie()}>Close</button>
        </div>
      </div>
    </div>
  )
};

export default SingleMovie;
