module.exports = (sequelize, DataTypes) => {
  const ElectricityBill = sequelize.define('ElectricityBill', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    units_consumed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bill_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bill_status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
  });

  return ElectricityBill;
};
