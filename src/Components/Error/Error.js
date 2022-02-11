import React from 'react'
import './Error.scss'

const Error = (props) => {
  console.log(props)
  return (
    <section className="error"><h2 className="error-message">{props.error}</h2></section>
  )
}

export default Error;