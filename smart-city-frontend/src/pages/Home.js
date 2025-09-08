import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCity, FaRecycle, FaCloudSunRain, FaBus, FaBolt, FaGavel, FaTrashAlt } from 'react-icons/fa'; // Added FaTrashAlt icon
import backgroundImage from '../assets/background.jpg';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const sections = [
    { name: 'AI Traffic Management', path: '/traffic', icon: <FaCity /> },
    { name: 'Smart Waste Management', path: '/waste', icon: <FaRecycle /> },
    { name: 'Disaster Risk Dashboard', path: '/disaster', icon: <FaCloudSunRain /> },
    { name: 'Public Transport', path: '/transport', icon: <FaBus /> },
    { name: 'Water & Electricity', path: '/utilities', icon: <FaBolt /> },
  ];

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="overlay">
        <div className="top-bar">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        <h1 className="title">🌍 Smart City Dashboard</h1>
        <div className="grid">
          {sections.map((section, index) => (
            <Link key={index} to={section.path} className="card">
              <div className="icon">{section.icon}</div>
              <span>{section.name}</span>
            </Link>
          ))}

          {/* Redirect in same tab to Lawyer */}
          <div
            className="card"
            onClick={() => (window.location.href = 'http://localhost:4005')}
            style={{ cursor: 'pointer' }}
          >
            <div className="icon"><FaGavel /></div>
            <span>Any Queries? Contact Lawyer</span>
          </div>

          {/* New card for Garbage Pickup Complaint */}
          <div
            className="card"
            onClick={() => (window.location.href = 'http://localhost:4000')}
            style={{ cursor: 'pointer' }}
          >
            <div className="icon"><FaTrashAlt /></div>
            <span>Garbage Pickup Complaint</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
