// models/Complaint.js
module.exports = (sequelize, DataTypes) => {
    const Complaint = sequelize.define('Complaint', {
      citizen_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complaint_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
      },
    });
  
    return Complaint;
  };
  