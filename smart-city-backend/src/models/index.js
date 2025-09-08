const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Your DB connection config

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.TrafficData = require('./traffic.model')(sequelize, DataTypes);

db.Waste = require('./waste.model')(sequelize, DataTypes);
db.DisasterRisk = require('./disaster.model')(sequelize, DataTypes);

db.Crime = require('./crime.model')(sequelize, DataTypes);
db.Transport = require('./transport.model')(sequelize, DataTypes);
db.Utility = require('./utility.model')(sequelize, DataTypes);
db.Complaint = require('./complaint.model')(sequelize, DataTypes);
// Register model
db.User = require('./user.model')(sequelize, DataTypes);

module.exports = db;
