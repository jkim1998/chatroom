import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <form>
                <h>Log In</h>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                {/* <input type="file" /> */}
                <button>Log In</button>
                <p>Don't have an account? <a href="https://www.w3schools.com">Create Account</a></p>
            </form>
        </div>
    </div>
  )
}

export default Login