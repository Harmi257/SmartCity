import React, { useState, useEffect } from 'react';
import './Transport.css';
import axios from 'axios';

const PublicTransport = () => {
  const [schedules, setSchedules] = useState([]);
  const [transportType, setTransportType] = useState('All');
  const [area, setArea] = useState('All');
  const [newTransport, setNewTransport] = useState({
    type: '',
    usage: '',
    area: '',
  });

  // Full URL for fetching transport data from the backend
  const apiUrl = 'http://localhost:5000/api/transport';

  // Get the token from localStorage
  const token = localStorage.getItem('jwtToken');  // Replace 'jwtToken' with your token key

  // Fetch transport data from the backend
  useEffect(() => {
    // Check if the token exists before making the request
    if (token) {
      axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,  // Send JWT token in the request header
        }
      })
        .then(response => {
          console.log('Transport Data:', response.data);  // Logging the response to check data format
          setSchedules(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the transport data!', error);
        });
    } else {
      console.log('No token found, unable to fetch data');
    }
  }, [token]);  // Dependency array includes token

  // Handle input change for adding new transport
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransport({ ...newTransport, [name]: value });
  };

  // Submit the form to create a new transport record
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure the token is present before submitting
    if (token) {
      axios.post(apiUrl, newTransport, {
        headers: {
          'Authorization': `Bearer ${token}`,  // Send JWT token in the request header
        }
      })
        .then(response => {
          setSchedules([...schedules, response.data]);
          setNewTransport({ type: '', usage: '', area: '' });
          alert('Transport added successfully!');
        })
        .catch(error => {
          console.error('There was an error creating the transport!', error);
          alert('Error creating transport.');
        });
    } else {
      alert('No token found, unable to add transport');
    }
  };

  return (
    <div className="transport-container">
      <h2>🚌 Public Transport Optimization</h2>

      {/* Transport Filter */}
      <div className="filters">
        <select value={transportType} onChange={(e) => setTransportType(e.target.value)}>
          <option value="All">All Types</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
        </select>

        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="All">All Areas</option>
          <option value="mg road">MG Road</option>
          <option value="anna nagar">Anna Nagar</option>
          <option value="guindy">Guindy</option>
          <option value="central">Central</option>
        </select>
      </div>

      {/* Display Transports */}
      <div className="schedule-section">
        <h3>Current Schedule</h3>
        {schedules
          .filter(item => (transportType === 'All' || item.type === transportType) && (area === 'All' || item.area === area))
          .map(item => (
            <div key={item.id} className="schedule-card">
              <h4>{item.type} - {item.area}</h4> {/* updated to use `area` here */}
              <p><strong>Occupancy:</strong> {item.usage}%</p> {/* updated to use `usage` */}
              <p><strong>Area:</strong> {item.area}</p>
            </div>
          ))
        }
      </div>

      {/* Form for Adding Transport */}
      <div className="add-transport-form">
        <h3>Add New Transport</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="type"
            placeholder="Type (Bus/Train)"
            value={newTransport.type}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="usage"
            placeholder="Usage Percentage"
            value={newTransport.usage}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={newTransport.area}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Transport</button>
        </form>
      </div>
    </div>
  );
};

export default PublicTransport;
