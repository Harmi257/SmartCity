module.exports = (sequelize, DataTypes) => {
  const Utility = sequelize.define('Utility', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    water: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    electricity: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  return Utility;
};
