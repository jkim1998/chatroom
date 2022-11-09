import React from 'react'


const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <form>
                <div className='header'>
                  <h>Sign Up</h>
                </div>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                {/* <input type="file" /> */}
                <button>Sign Up</button>
            </form>
            <p>Already have an account? <a href="https://www.w3schools.com">Sign in</a></p>
        </div>
    </div>
  )
}

export default Register