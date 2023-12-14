// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // Implement your actual login logic here
    // For simplicity, let's assume the login is successful if email and password are not empty
    if (email && password) {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {loginSuccess && <p>Login successful!</p>}
        <div className='Register'>
           <Link to='/Register'>Signup</Link>
        </div>

      </form>
    </div>
  );
};

export default Login;
