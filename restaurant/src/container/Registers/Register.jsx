import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div id="register" className="app__login flex__center section__padding ">
      <div className="app__login-content">
        <h1 className="headtext__cormorant">Register</h1>
        <p className="p__opensans">Welcome! To our Website 🎊</p>

        <form className="app__login-form">
          <input type="email" placeholder="Email" className="app__login-input" required />
          <input type="password" placeholder="Password" className="app__login-input" required />
          <button type="submit" className="custom__button">Register</button>
          <p className="p__opensans">Already have an account? <a href="#login"style={{color:'whitesmoke'}}>Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
