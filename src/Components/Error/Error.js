import React from 'react'
import './Error.scss'

const Error = ({error}) => {
  let errorMessage = (
    <section className='error'>
      <h2 className='error-message'>{error}</h2>
      <button className='error-home-button' onClick={() => {window.location.href='/'}}>View All Movies</button>
    </section>
  )

  if (error.slice(0,2) === '40') {
    errorMessage =(
    <section className='error'>
      <h2 className='error-message'>{error}</h2>
    </section>
    )
  }

  return (
    errorMessage
  )
}

export default Error;