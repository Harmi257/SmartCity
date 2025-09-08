import React, { useState } from 'react';
import TrafficDataSearch from '../components/TrafficDataSearch';
import Waste from '../components/WasteManagement';
import UtilityDashboard from '../components/UtilityDashboard';
import Disaster from '../components/disasterManagement';
import Transport from '../components/transportManagement';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('traffic');
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case 'traffic':
        return <TrafficDataSearch />;
      case 'waste':
        return <Waste />;
      case 'utility':
        return <UtilityDashboard />;
      case 'disaster':
        return <Disaster />;
      case 'transport':
        return <Transport />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleLawyerRedirect = () => {
    window.location.href = 'http://localhost:4005'; // Lawyer website
  };

  // New handler for garbage complaint redirect
  const handleGarbageComplaintRedirect = () => {
    window.location.href = 'http://localhost:4000'; // Garbage complaint website
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Top Header with Logout */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>User Dashboard</h1>
        <button onClick={handleLogout} style={logoutStyle}>Logout</button>
      </div>

      {/* Button Navigation */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', margin: '30px 0' }}>
        <button onClick={() => setActiveComponent('traffic')} style={buttonStyle}>
          Traffic Data
        </button>
        <button onClick={() => setActiveComponent('waste')} style={buttonStyle}>
          Waste Management
        </button>
        <button onClick={() => setActiveComponent('utility')} style={buttonStyle}>
          Utility Dashboard
        </button>
        <button onClick={() => setActiveComponent('disaster')} style={buttonStyle}>
          Disaster Management
        </button>
        <button onClick={() => setActiveComponent('transport')} style={buttonStyle}>
          Transport Management
        </button>
        <button onClick={handleLawyerRedirect} style={{ ...buttonStyle, backgroundColor: '#6a4c93' }}>
          Any Queries? Contact Lawyer
        </button>
        <button onClick={handleGarbageComplaintRedirect} style={{ ...buttonStyle, backgroundColor: '#2a9d8f' }}>
          Garbage Pickup Complaint
        </button>
      </div>

      {/* Component Display Area */}
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        {renderComponent()}
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#457b9d',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
};

const logoutStyle = {
  padding: '8px 16px',
  backgroundColor: '#e63946',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
};

export default UserDashboard;
