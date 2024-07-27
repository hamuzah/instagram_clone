// src/Components/SignupPage.js
import React, { useState } from 'react';
import { signup } from '../auth';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import logo from '../Assets/11.png'; // Add the Instagram logo to your assets folder

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <img src={logo} alt="Instagram" className="logo" />
        <form onSubmit={handleSignup}>
          <h2>Sign up to see photos and videos from your friends.</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign up</button>
        </form>
        <div className="login-redirect">
          Have an account? <a href="/">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
