import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'; 
import { register } from './services/auth.service.js';

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    register(formData).then((user)=>{
      console.log(user);
    })
  };



  return (
    <div className="container mt-5 custom-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card custom-card">
            <div className="card-header custom-card-header bg-first font-heading">Register</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label custom-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label custom-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label custom-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="px-42 py-22 rounded-full text-white bg-first font-heading"
                  onClick={register}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="card-footer custom-card-footer">
              <p>Already a user ?</p>
              <Link to="/login" className="custom-link">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
