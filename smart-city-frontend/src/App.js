import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Traffic from './pages/Traffic';
import Waste from './pages/Waste';
import Disaster from './pages/Disaster';
import Transport from './pages/Transport';
import Utilities from './pages/Utilities';
import About from './pages/About';
import Contact from './pages/Contact';
import DisasterContent from './pages/DisasterContent';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';

import './App.css';

function App() {
  const user = useSelector((state) => state.auth.user); // ✅ get user from Redux
  const isAuthenticated = !!user;

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/user-dashboard" element={ <UserDashboard /> } />
        <Route path="/admin-dashboard" element={<AdminDashboard /> } />

        {/* Other Pages */}
        <Route path="/traffic" element={<Traffic />} />
        <Route path="/waste" element={<Waste />} />
        <Route path="/disaster" element={<Disaster />} />
        <Route path="/disaster/:type" element={<DisasterContent />} />
        <Route path="/transport" element={<Transport/>} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
