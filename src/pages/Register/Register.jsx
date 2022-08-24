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
        <div className='form_wrapper'>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <form action="">
              <input type="email" id="in_email" placeholder='Email address' required/>
              <input type="submit" id='in_sub' value="Get started" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
