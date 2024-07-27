// src/Components/LoginPage.js
  import React, { useState } from 'react';
import { login } from '../auth'; 
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../Assets/11.png'; // Add the Instagram logo to your assets folder

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="Instagram" className="logo" />
        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div className="or-divider">
          <div className="line"></div>
          <div className="or-text">OR</div>
          <div className="line"></div>
        </div>
        <button className="facebook-login">Log in with Facebook</button>
        <a href="/password-reset" className="forgot-password">Forgot password?</a>
      </div>
      <div className="signup-redirect">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
    </div>
  );
};

export default LoginPage;
