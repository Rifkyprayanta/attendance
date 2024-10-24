const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Student = sequelize.define('student', {
    nis: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sur_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bloodType: {
        type: DataTypes.ENUM('A', 'B', 'AB', 'O', 'None'),
        allowNull: false,
        defaultValue: 'None', // Default status
    },
    sex: {
        type: DataTypes.ENUM('Male', 'Female', 'None'),
        allowNull: false,
        defaultValue: 'None', // Default status
    },
    status: {
        type: DataTypes.ENUM('Active', 'Inactive'),
        allowNull: false,
        defaultValue: 'Active', // Default status
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Automatically set to current date/time
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    grade_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    class_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    tableName: 'student', // Specify the table name
    timestamps: false,
});


module.exports = Student;