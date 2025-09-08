import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrafficByArea } from '../redux/actions/trafficActions';
import TrafficMap from './TrafficMap';


const TrafficDataSearch = () => {
  const [area, setArea] = useState('');
  const dispatch = useDispatch();

  const trafficData = useSelector((state) => state.traffic.trafficData);
  const loading = useSelector((state) => state.traffic.loading);
  const error = useSelector((state) => state.traffic.error);

  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  // Handle search action
  const handleSearch = () => {
    if (area) {
      dispatch(getTrafficByArea(area));
    }
  };

  // Fetch the latitude and longitude for the entered area
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

  return (
    <div className="traffic-container">
      <h1>🚦 Traffic Data</h1>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter area"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Loading & Error states */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* Display Traffic Data */}
      {trafficData && trafficData.length > 0 && (
        <div className="traffic-info">
          <p><strong>Area:</strong> {trafficData[0].area}</p>
          <p><strong>Vehicle Count:</strong> {trafficData[0].vehicle_count}</p>
          <p><strong>Suggestion:</strong> {trafficData[0].suggestion || 'No suggestion available'}</p>
          <p><strong>Last Updated:</strong> {new Date(trafficData[0].timestamp).toLocaleString()}</p>

          {/* Display Map */}
          <div style={{ marginTop: '20px' }}>
            <TrafficMap center={mapCenter} apiKey="YOUR_GOOGLE_MAPS_API_KEY" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrafficDataSearch;
