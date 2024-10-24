const express = require('express')
const sequelize = require('./models')
const employeeRoutes = require('./routes/employeeRoutes')
const studentRoutes = require('./routes/studentRoutes')
const authRoutes = require('./routes/authRoutes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/employee', employeeRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/login/student', authRoutes);


const startServer = async () => {
    try {
        await sequelize.sync(); // Sync database
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();