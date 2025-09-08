// server.js
const app = require('./src/app');
const sequelize = require('./src/config/sequelize');

const PORT = process.env.PORT || 5000;

// Sync DB and start server
sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Database connected & synced');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error connecting to the database:', err);
  });
