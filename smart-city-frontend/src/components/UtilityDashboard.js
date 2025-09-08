// src/pages/UtilityDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const UtilityDashboard = () => {
  const [utilities, setUtilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArea, setSelectedArea] = useState('All');
  const [showChart, setShowChart] = useState(false);
  const [showAppliances, setShowAppliances] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      console.error('No JWT token found.');
      setLoading(false);
      return;
    }

    axios.get('http://localhost:5000/api/utility', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(res => {
      setUtilities(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error("Error fetching utility data:", err);
      setLoading(false);
    });
  }, []);

  const groupByArea = (data) => {
    const grouped = {};
    data.forEach(item => {
      if (!grouped[item.area]) {
        grouped[item.area] = { water: 0, electricity: 0 };
      }
      grouped[item.area].water += item.water || 0;
      grouped[item.area].electricity += item.electricity || 0;
    });
    return grouped;
  };

  if (loading) return <p>Loading Smart Utility Data...</p>;

  const groupedData = groupByArea(utilities);
  const areas = ['All', ...Object.keys(groupedData)];
  const filteredAreas = selectedArea === 'All'
    ? Object.entries(groupedData)
    : groupedData[selectedArea]
      ? [[selectedArea, groupedData[selectedArea]]]
      : [];

  const chartData = {
    labels: filteredAreas.map(([area]) => area),
    datasets: [
      {
        label: 'Water (Liters)',
        data: filteredAreas.map(([_, usage]) => usage.water),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Electricity (kWh)',
        data: filteredAreas.map(([_, usage]) => usage.electricity),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  return (
    <div className="utility-dashboard">
      <h2>💡 Smart Water & Electricity Management</h2>

      
      <div className="filter-container">
        <label>📍 Filter by Area:</label>
        <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
          {areas.map(area => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>

      <div className="button-container">
        <button onClick={() => setShowChart(!showChart)}>
          {showChart ? 'Hide Usage Chart' : '📊 View Usage Chart'}
        </button>
        <button onClick={() => setShowAppliances(!showAppliances)}>
          {showAppliances ? 'Hide Appliance Info' : '📋 View Appliance Wattage Info'}
        </button>
      </div>

      {showChart && (
        <div className="chart-container" style={{ marginTop: '20px' }}>
          <Bar data={chartData} />
        </div>
      )}

      {showAppliances && (
        <div className="appliance-info">
          <h3>⚙️ Common Appliances and Estimated Wattage</h3>
          <table>
            <thead>
              <tr>
                <th>Appliance</th>
                <th>Wattage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Fan</td><td>60W</td></tr>
              <tr><td>TV</td><td>100W</td></tr>
              <tr><td>Fridge</td><td>150W</td></tr>
              <tr><td>Washing Machine</td><td>500W</td></tr>
              <tr><td>AC</td><td>1500W</td></tr>
            </tbody>
          </table>
        </div>
      )}

      {filteredAreas.map(([area, usage]) => {
        const water = usage.water || 0;
        const electricity = usage.electricity || 0;
        const co2 = (electricity * 0.5).toFixed(2);
        const overThreshold = water > 800 || electricity > 1000;

        return (
          <div key={area} className={`zone-card ${overThreshold ? 'alert' : ''}`}>
            <h3>🏙️ {area}</h3>
            <div className="usage-bar-label">💧 Water Usage: {water} Liters</div>
            <div className="usage-bar">
              <div
                className="fill water-fill"
                style={{ width: `${Math.min(water / 10, 100)}%` }}
              />
            </div>
            <div className="usage-bar-label">⚡ Electricity Usage: {electricity} kWh</div>
            <div className="usage-bar">
              <div
                className="fill electricity-fill"
                style={{ width: `${Math.min(electricity / 10, 100)}%` }}
              />
            </div>
            <p>🌍 Estimated CO₂ Emission: {co2} kg</p>
            {overThreshold && <p className="warning-text">⚠️ High consumption detected in this area!</p>}
          </div>
        );
      })}
    </div>
  );
};

export default UtilityDashboard;
