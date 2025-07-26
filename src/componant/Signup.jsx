import React from 'react'
import './signup.css'

const Signup = () => {
  return (
     <div class="forms">
    <form action="#" method="POST" >
      <h2>Sign In</h2>
      <div class="inputbox">
        <input type="text" name="username" required />
        <span>Username</span>
        <i></i>
      </div>
      <div class="inputbox">
        <input type="password" name="password" required />
        <span>Enter Password</span>
        <i></i>
      </div>
      <input type="submit" value="Login" />
      <div class="links">
        <a href="#">Forgot Password</a>
        <a href="#">Signup</a>
      </div>
    </form>
  </div>
  )
}

export default Signup
