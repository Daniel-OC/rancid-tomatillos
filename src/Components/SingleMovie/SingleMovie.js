import React from 'react';
// import Modal, { useModal } from 'react-top-modal';

const SingleMovie = (props) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Modal Title</h4>
        </div>
        <div className='modal-body'>
          <button className='button'>Close</button>
        </div>
      </div>
    </div>
  )
};

export default SingleMovie;
