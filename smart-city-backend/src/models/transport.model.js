module.exports = (sequelize, DataTypes) => {
  const Transport = sequelize.define('Transport', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  return Transport;
};
