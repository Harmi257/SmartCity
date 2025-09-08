import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Smart City Management System</h1>
        <div className="button-group">
          <button onClick={() => navigate('/login')}>Login as Public</button>
          <button onClick={() => navigate('/login')}>Login as Admin</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
