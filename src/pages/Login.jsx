import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='Username' />
        <input required type="password" placeholder='Password' />
        <button>Sign In</button>
        <p>This is an error!</p>
        <span>Don't Have an account ? <Link to="/register">Resister</Link></span>
      </form>
    </div>
  )
}

export default Login
