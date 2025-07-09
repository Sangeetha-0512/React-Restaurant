import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../';

import './Login.css';


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      
      <div className="app__login">
        <div className="app__login-content">
          <h1 className="headtext__cormorant">Login</h1>
          <p className="p__opensans">Welcome back! Please login to continue</p>

          <form className="app__login-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" className="app__login-input" required />
            <input type="password" placeholder="Password" className="app__login-input" required />
            <button type="submit" className="custom__button">Login</button>
            <p className="p__opensans">
              Don't have an account? <a href="/register" style={{ color: 'whitesmoke' }}>Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;



