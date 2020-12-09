import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = (props) => {
  return (
    <div>
      <h1>We could not find the page you were looking for.</h1>
      <Link to="/albums">Maybe check out our store.</Link>
    </div>
  )
}

export default NotFound
