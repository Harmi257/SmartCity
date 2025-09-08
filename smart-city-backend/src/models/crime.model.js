module.exports = (sequelize, DataTypes) => {
  const Crime = sequelize.define('Crime', {
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    crime_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reported_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  return Crime;
};
