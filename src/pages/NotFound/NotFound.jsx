import React from 'react'
import './NotFound.scss'
import logo from '../Login/img/net_logo.svg'
function NotFound() {
  return (
    <div className='NotFound'>
        <img src={logo} alt="Netflix logo" />
        <h2>Page Not Found, ERROR 404</h2>
    </div>
  )
}

export default NotFound