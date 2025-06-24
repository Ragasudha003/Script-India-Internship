import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Enter your username" />
        <input type="password" placeholder="Enter your password" />
        <button className="login-btn">Login</button>
        <button className="forgot-btn">Forgot Password?</button>
      </div>
    </div>
  );
}

export default Login;
