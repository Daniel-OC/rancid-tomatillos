import React from 'react'
import './Error.scss'
import {Link} from 'react-router-dom'

const Error = (props) => {
  return (
    <section className="error">
      <h2 className="error-message">{props.error}</h2>
      <button onClick={() => {window.location.href="/"}}>Go Home!</button>
      {/* <div className='error-home-button'>
        <Link to="/">Go Back Home</Link>
      </div> */}
    </section>
  )
}

export default Error;