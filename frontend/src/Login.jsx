import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { handleLogin } from './services/auth.service.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="custom-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="custom-card">
            <div className="custom-card-header bg-first font-heading">Login</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="custom-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="custom-input"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="custom-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="custom-input"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="px-42 py-22 rounded-full text-white bg-first font-heading"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="custom-card-footer">
              <p>Not a user?</p>
              <Link to="/register" className="custom-link">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
