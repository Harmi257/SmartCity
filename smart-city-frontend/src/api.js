// src/api.js
import axios from 'axios';

// Base API instance
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // All requests are prefixed with this
});

// Add token to request headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken'); // Retrieve token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 🔸 Traffic Management
export const fetchTrafficData = (area) =>
  API.get(`/traffic/${area}`);

export const postTrafficData = (data) =>
  API.post('/traffic', data);

// 🔸 Waste Management
export const fetchWasteStatus = () =>
  API.get('/waste');

// 🔸 Disaster Risk Prediction
export const fetchDisasterRisk = (data) =>
  API.get('/disaster');

// 🔸 Public Transport Optimization
export const fetchTransportSchedule = () =>
  API.get('/transport');

// 🔸 Utility (Water & Electricity) Status
export const fetchUtilityStatus = () =>
  API.get('/utility');
