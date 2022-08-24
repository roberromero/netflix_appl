import React from 'react'
import './Register.scss'
import logo from '../Login/img/net_logo.svg'
const Register = () => {
  return (
    <div className='register'>
      <img src={logo} alt="Netflix logo" />
      <div className='content_wrapper'>  
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <p>Ready to watch?Enter your email to create or restart your membership.</p>
        <form action="">
            <input type="email" required/>
            <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register
