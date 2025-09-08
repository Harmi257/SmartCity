import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';  // Import Home component

const AdminDashboard = () => {
  const [transportSchedules, setTransportSchedules] = useState([]);
  const [utilityStatus, setUtilityStatus] = useState([]);
  const [complaints, setComplaints] = useState([]);

  // Fetch data for admin's management purposes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const transportResponse = await axios.get('http://localhost:5000/api/transport');
        const utilityResponse = await axios.get('http://localhost:5000/api/utilities');
        const complaintsResponse = await axios.get('http://localhost:5000/api/complaints');
        
        setTransportSchedules(transportResponse.data);
        setUtilityStatus(utilityResponse.data);
        setComplaints(complaintsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handler for adding new data
  const handleAddData = async (type) => {
    if (type === 'transport') {
      try {
        const newTransport = { route: 'Route X', time: '12:00 PM' };
        await axios.post('http://localhost:5000/api/transport', newTransport);
        alert('Transport added successfully!');
      } catch (error) {
        console.error("Error adding data:", error);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      {/* Show Home content inside Admin Dashboard */}
      <Home /> {/* You can also display specific Home sections here based on the Admin needs */}

      {/* Transport Management */}
      <div className="section">
        <h3>Manage Transport Schedules</h3>
        <ul>
          {transportSchedules.map((schedule) => (
            <li key={schedule.id}>
              {schedule.route} - {schedule.time}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => handleAddData('transport')}>Add New Transport</button>
      </div>

      {/* Utility Management */}
      <div className="section">
        <h3>Manage Utility Status</h3>
        <ul>
          {utilityStatus.map((status) => (
            <li key={status.id}>
              {status.type}: {status.status}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => handleAddData('utilities')}>Add New Utility</button>
      </div>

      {/* Complaint Management */}
      <div className="section">
        <h3>Manage Complaints</h3>
        <ul>
          {complaints.map((complaint) => (
            <li key={complaint.id}>
              {complaint.title} - {complaint.status}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => handleAddData('complaints')}>Add New Complaint</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
