module.exports = (sequelize, DataTypes) => {
  const DisasterRisk = sequelize.define('DisasterRisk', {
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    humidity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    seismic_activity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rainfall: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    wind_speed: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    air_quality_index: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    recommendation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return DisasterRisk;
};
