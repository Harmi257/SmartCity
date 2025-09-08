import React, { useState } from 'react';
import './Transport.css';

const TransportRoutes = () => {
  const [showRoutes, setShowRoutes] = useState(false);

  const toggleRoutes = () => {
    setShowRoutes(!showRoutes);
  };

  return (
    <div className="transport-container">
      <h2 className="main-heading">🚍 Public Transport Optimization</h2>

      <button className="route-toggle-button" onClick={toggleRoutes}>
        {showRoutes ? 'Hide Routes 🛑' : 'Show Bus & Train Routes 🚏'}
      </button>

      {showRoutes && (
        <div className="route-section">
          <h3>🧭 Discover Your Route Adventure</h3>

          <div className="route-category">
            <h4>🚌 Legendary Bus Journeys</h4>
            <ul>
              <li>
                <strong>🌇 Sunset Trail (Route 101):</strong><br />
                Starts from <em>Auro Sunset Point</em> → via <em>Heritage Lane</em> → ends at <em>Promenade Vibes Hub</em>
              </li>
              <li>
                <strong>🎨 Culture Cruise (Route 42B):</strong><br />
                From <em>Artisans' Alley</em> → through <em>French Quarters</em> → to <em>Bharathi Literary Circle</em>
              </li>
              <li>
                <strong>🏝️ Beach Hopper (Route 88):</strong><br />
                Starts at <em>Paradise Wharf</em> → stops at <em>Serenity Splash</em> → ends near <em>Sun-Kissed Bay</em>
              </li>
            </ul>
          </div>

          <div className="route-category">
            <h4>🚆 Epic Train Trails</h4>
            <ul>
              <li>
                <strong>🚂 The Mangrove Express:</strong><br />
                From <em>Puducherry Central</em> → via <em>Cuddalore Coast</em> → ends at <em>Pichavaram Canopy</em>
              </li>
              <li>
                <strong>🌿 Coastal Heritage Line:</strong><br />
                Begins in <em>White Town</em> → through <em>Ancient Temples Loop</em> → to <em>Mahabs Terminal</em>
              </li>
              <li>
                <strong>🎶 Spiritual Soundtrack Local:</strong><br />
                Runs from <em>Karaikal Calm</em> → past <em>Velankanni Chimes</em> → ends in <em>Nagore Soul Station</em>
              </li>
            </ul>
          </div>

          <p className="tagline">
            🚏 Choose a route, ride the vibe, and discover the hidden gems across your city. 🌈
          </p>
        </div>
      )}
    </div>
  );
};

export default TransportRoutes;
