// src/components/Traffic.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrafficByArea } from '../redux/actions/trafficActions';
import './Traffic.css';
import TrafficMap from '../components/TrafficMap'; // Ensure this path is correct
import axios from 'axios';

const centerDefault = {
  lat: 11.9139,
  lng: 79.8145,
};

const Traffic = () => {
  const [area, setArea] = useState('');
  const dispatch = useDispatch();

  const trafficData = useSelector((state) => state.traffic.trafficData);
  const loading = useSelector((state) => state.traffic.loading);
  const error = useSelector((state) => state.traffic.error);

  const [mapCenter, setMapCenter] = useState(centerDefault);

  // Reporting states
  const [reportArea, setReportArea] = useState('');
  const [vehicleCount, setVehicleCount] = useState('');
  const [trafficType, setTrafficType] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [reportMessage, setReportMessage] = useState('');

  const handleSearch = () => {
    if (area) {
      dispatch(getTrafficByArea(area));
    }
  };

  const fetchLatLng = async (address) => {
    try {
      const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with actual API key
      const geoResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
      );
      const geoData = await geoResponse.json();
      if (geoData.results.length > 0) {
        const location = geoData.results[0].geometry.location;
        setMapCenter({ lat: location.lat, lng: location.lng });
      }
    } catch (err) {
      console.error('Error fetching geocode:', err);
    }
  };

  useEffect(() => {
    if (area) {
      fetchLatLng(area);
    }
  }, [area]);

  const handleSubmitTrafficReport = async () => {
    if (!reportArea || !vehicleCount || !trafficType) {
      setReportMessage('Please fill all required fields.');
      return;
    }

    try {
      // Include the Authorization header with JWT token
      const token = localStorage.getItem('jwtToken');
      await axios.post(
        'http://localhost:5000/api/traffic',
        {
          area: reportArea,
          vehicle_count: parseInt(vehicleCount),
          traffic_type: trafficType,
          suggestion: suggestion,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send JWT token in the request header
          },
        }
      );
      setReportMessage('✅ Traffic report submitted successfully!');
      setReportArea('');
      setVehicleCount('');
      setTrafficType('');
      setSuggestion('');
    } catch (error) {
      console.error('Error submitting traffic report:', error);
      setReportMessage('❌ Failed to submit traffic report.');
    }
  };

  return (
    <div className="traffic-container">
      <h1>🚦 Traffic Data</h1>

      <div className="search-section">
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter area"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {trafficData && trafficData.length > 0 && (
        <>
          <div className="traffic-info">
            <p><strong>Area:</strong> {trafficData[0].area}</p>
            <p><strong>Vehicle Count:</strong> {trafficData[0].vehicle_count}</p>
            <p><strong>Suggestion:</strong> {trafficData[0].suggestion || 'No suggestion available'}</p>
            <p><strong>Last Updated:</strong> {new Date(trafficData[0].timestamp).toLocaleString()}</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <TrafficMap center={mapCenter} apiKey="YOUR_GOOGLE_MAPS_API_KEY" />
          </div>
        </>
      )}

      <br />
      <br />

      <div className="report-form">
        <h3>📝 Report Traffic</h3>
        <input
          type="text"
          placeholder="Enter Area"
          value={reportArea}
          onChange={(e) => setReportArea(e.target.value)}
        />
        <input
          type="number"
          placeholder="Vehicle Count"
          value={vehicleCount}
          onChange={(e) => setVehicleCount(e.target.value)}
        />
        <select value={trafficType} onChange={(e) => setTrafficType(e.target.value)}>
          <option value="">Select Traffic Type</option>
          <option value="Smooth">Smooth</option>
          <option value="Moderate">Moderate</option>
          <option value="Heavy">Heavy</option>
          <option value="Accident">Accident</option>
          <option value="Diversion">Diversion</option>
        </select>
        <textarea
          placeholder="Any suggestion?"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
        ></textarea>
        <button onClick={handleSubmitTrafficReport}>Submit Report</button>
        {reportMessage && <div className="status-msg">{reportMessage}</div>}
      </div>
    </div>
  );
};

export default Traffic;
