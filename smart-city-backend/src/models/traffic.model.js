// models/traffic.model.js
module.exports = (sequelize, DataTypes) => {
    const TrafficData = sequelize.define('TrafficData', {
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicle_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      suggestion: {
        type: DataTypes.STRING, // 👈 Add this line
        allowNull: true,
      }
    });
  
    return TrafficData;
  };
  