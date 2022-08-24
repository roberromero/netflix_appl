import React from 'react'
import './Login.scss'
import logo from './img/net_logo.svg'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="netflix logo" />
       <div className='box_wrapper'>
            <h2>Sign in</h2>
            <form action="">
              <input type="text" name="username" id="username" placeholder='Email or phone number' required/>
              <input type="password" name="userpassword" id="userpassword" placeholder='Password' required/>
              <input type="submit" value="Sign in" id="submit"/>
            </form>
            <div className="terms_cond">
              <span>New to Netflix</span>
              <a href="">Sign up now</a>
              <div className='protect'>
                <span>This page is 
                protected by Lorem ipsum sit amet.
                </span>
                <a href="">Learn more.</a>
              </div>
            </div>
       </div>
    </div>
  )
}

export default Login
