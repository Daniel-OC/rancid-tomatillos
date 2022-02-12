import React from 'react'
import './Error.scss'
import './Error-Dog.png'

const Error = ({error}) => {
  let errorMessage = (
    <section className="error">
      <h2 className="error-message">{error}</h2>
      <button className='error-home-button' onClick={() => {window.location.href="/"}}>View All Movies</button>
      <img src='./Error-Dog.png'/>
    </section>
  )

  if (error.slice(0,2) === "40") {
    errorMessage =(
    <section className="error">
      <h2 className="error-message">{error}</h2>
      <img src='./Error-Dog.png'/>
    </section>
    )
  }

  return (
    errorMessage
  )
}

export default Error;