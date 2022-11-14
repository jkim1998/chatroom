import React from 'react'

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <form>
                <h>Log In</h>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                {/* <input type="file" /> */}
                <div className='buttons'>
                  <button className='login_button'>Log In</button>
                  <Link to="/" className='link'><button className='login_button'>Demo</button></Link>
                </div>
                <p>Don't have an account? <a href="/register">Create Account</a></p>
            </form>
        </div>
    </div>
  )
}

export default Login