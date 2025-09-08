const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const wasteRoutes = require('./routes/waste.routes');
const trafficRoutes = require('./routes/traffic.routes');
const crimeRoutes = require('./routes/crime.routes');
const transportRoutes = require('./routes/transport.routes');
const utilityRoutes = require('./routes/utility.routes');
const complaintRoutes = require('./routes/complaint.routes');
const disasterRoutes = require('./routes/disaster.routes');
const userRoutes = require('./routes/user.routes'); // ✅ Added User Routes

app.use('/api/waste', wasteRoutes);
app.use('/api/traffic', trafficRoutes);
app.use('/api/crime', crimeRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/utility', utilityRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/disaster', disasterRoutes);
app.use('/api/users', userRoutes); // ✅ Mount user routes at /api/users

module.exports = app;
