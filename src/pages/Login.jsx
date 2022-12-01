import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <h>Log In</h>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="buttons">
            <button className="login_button">Log In</button>
            <Link to="/" className="link">
              <button className="login_button">Demo</button>
            </Link>
          </div>
          <p>
            Don't have an account? <a href="/register">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
