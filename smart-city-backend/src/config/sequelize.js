const { Sequelize } = require('sequelize');
const dbConfig = require('./db.config');

// Create Sequelize instance with environment configs
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  pool: dbConfig.POOL,
  logging: false, // Turn off SQL logging
});

module.exports = sequelize;
