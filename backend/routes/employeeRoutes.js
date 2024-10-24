const express = require('express');
const { 
    createEmployee, 
    getEmployee,
    getEmployeebyId,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController')

const router = express.Router();

router.post('/', createEmployee);
router.get('/', getEmployee);
router.get('/:id', getEmployeebyId);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;