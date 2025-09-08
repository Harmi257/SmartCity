// src/pages/RegisterPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../redux/actions/authActions';
import './Register.css';

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'public',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { username, email, password, role } = form;
    if (!username || !email || !password || !role) {
      alert('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', form);
      const { user } = response.data;

      dispatch(registerSuccess(user));

      alert('Registration Successful!');
      navigate('/login');
    } catch (err) {
      console.error(err.response?.data?.message);
      alert(err.response?.data?.message || 'Registration Failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={form.username}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            style={{
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '14px',
              width: '100%'
            }}
            required
          >
            <option value="public">Public</option>
            <option value="official">Official</option>
          </select>

          <button type="submit">Register</button>
        </form>

        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Already have an account?{' '}
          <Link to="/" style={{ color: '#f5576c', textDecoration: 'none' }}>
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
