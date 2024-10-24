const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Class = sequelize.define('class', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Automatically set to current date/time
    },
},{
    tableName: 'class', // Specify the table name
    timestamps: false,
});

module.exports = Class;