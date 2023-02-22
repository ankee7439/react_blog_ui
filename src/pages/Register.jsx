import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
    <h1>Register</h1>
    <form>
      <input required type="text" placeholder='Username' />
      <input required type="email" placeholder='eMail' />
      <input required type="password" placeholder='Password' />
      <button>Sign Up</button>
      <p>This is an error!</p>
      <span>Don't Have an account ? <Link to="/login">Login</Link></span>
    </form>
  </div>
  )
}

export default Register
