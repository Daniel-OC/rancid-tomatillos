import React from 'react'
import './Error.scss'

const Error = (props) => {
  return (
    <section className="error">
      <h2 className="error-message">{props.error}</h2>
      <button className='error-home-button' onClick={() => {window.location.href="/"}}>View All Movies</button>
    </section>
  )
}

export default Error;