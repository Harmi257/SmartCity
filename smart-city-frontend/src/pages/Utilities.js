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
import './UtilityDashboard.css';
import UtilityForm from '../components/UtilityForm';  // Importing the UtilityForm component

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const UtilityDashboard = () => {
  const [utilities, setUtilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArea, setSelectedArea] = useState('All');
  const [showChart, setShowChart] = useState(false);
  const [showAppliances, setShowAppliances] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    // Check if the token exists before making the request
    if (!token) {
      console.error('No JWT token found.');
      setLoading(false);
      return;
    }

    // Fetch data with the token
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
      grouped[item.area].water += item.water;
      grouped[item.area].electricity += item.electricity;
    });
    return grouped;
  };

  if (loading) return <p>Loading Smart Utility Data...</p>;

  const groupedData = groupByArea(utilities);
  const areas = ['All', ...Object.keys(groupedData)];
  const filteredAreas = selectedArea === 'All'
    ? Object.entries(groupedData)
    : [[selectedArea, groupedData[selectedArea]]];

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

      <UtilityForm /> {/* Include the form component here */}

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
        <div className="chart-container">
          <Bar data={chartData} />
        </div>
      )}

      {showAppliances && (
        <div className="appliance-info">
          <h3>⚙️ Common Appliances and Estimated Wattage</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Appliance</th>
                <th>Estimated Wattage (W)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Home</td><td>Air Conditioner (HVAC)</td><td>2500–10000</td></tr>
              <tr><td>Home</td><td>Window AC</td><td>1500–5000</td></tr>
              <tr><td>Home</td><td>Home Heater</td><td>5000–20000</td></tr>
              <tr><td>Home</td><td>Portable Heater</td><td>750–2000</td></tr>
              <tr><td>Home</td><td>Humidifier</td><td>25–350</td></tr>
              <tr><td>Home</td><td>Dehumidifier</td><td>200–750</td></tr>
              <tr><td>Home</td><td>Fan</td><td>15–200</td></tr>
              <tr><td>Home</td><td>LED Bulb</td><td>3–25</td></tr>
              <tr><td>Home</td><td>Incandescent Bulb</td><td>15–200</td></tr>
              <tr><td>Home</td><td>Electric Water Heater</td><td>3000–6600</td></tr>
              <tr><td>Kitchen</td><td>Refrigerator</td><td>500–1000</td></tr>
              <tr><td>Kitchen</td><td>Electric Range/Oven</td><td>2000–5000</td></tr>
              <tr><td>Kitchen</td><td>Electric Stove</td><td>750–5000</td></tr>
              <tr><td>Kitchen</td><td>Microwave</td><td>750–1500</td></tr>
              <tr><td>Kitchen</td><td>Dishwasher</td><td>1200–2000</td></tr>
              <tr><td>Kitchen</td><td>Coffee Maker</td><td>600–1200</td></tr>
              <tr><td>Kitchen</td><td>Toaster</td><td>750–1500</td></tr>
              <tr><td>Kitchen</td><td>Electric Kettle</td><td>1000–2000</td></tr>
              <tr><td>Kitchen</td><td>Electric Cooker</td><td>160–1500</td></tr>
              <tr><td>Other</td><td>EV Charger</td><td>1500–20000</td></tr>
              <tr><td>Other</td><td>TV</td><td>25–500</td></tr>
              <tr><td>Other</td><td>Washing Machine</td><td>400–1500</td></tr>
              <tr><td>Other</td><td>Clothes Dryer</td><td>1800–5000</td></tr>
              <tr><td>Other</td><td>Clothes Iron</td><td>750–2000</td></tr>
              <tr><td>Other</td><td>Hair Dryer</td><td>750–2000</td></tr>
              <tr><td>Other</td><td>Desktop</td><td>100–250</td></tr>
              <tr><td>Other</td><td>Laptop</td><td>35–150</td></tr>
              <tr><td>Other</td><td>Smartphone Charger</td><td>5–25</td></tr>
              <tr><td>Other</td><td>Water Pump</td><td>750–2000</td></tr>
            </tbody>
          </table>

        </div>
      )}

      {/* Data Display */}
      {filteredAreas.map(([area, usage]) => {
        const water = usage.water || 0;
        const electricity = usage.electricity || 0;
        const co2 = (electricity * 0.5).toFixed(2); // Assume 0.5 kg CO2 per kWh
        const overThreshold = water > 800 || electricity > 1000;

        return (
          <div key={area} className={`zone-card ${overThreshold ? 'alert' : ''}`}>
            <h3>🏙️ {area}</h3>
            <div className="usage-bar-label">💧 Water Usage: {water} Liters</div>
            <div className="usage-bar">
              <div className="fill water-fill" style={{ width: `${Math.min(water / 10, 100)}%` }} />
            </div>
            <div className="usage-bar-label">⚡ Electricity Usage: {electricity} kWh</div>
            <div className="usage-bar">
              <div className="fill electricity-fill" style={{ width: `${Math.min(electricity / 10, 100)}%` }} />
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
