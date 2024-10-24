const express = require('express');
const { 
    getStudent,
    createStudent,
    getStudentbyId,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController')

const router = express.Router();

router.post('/', createStudent);
router.get('/', getStudent);
router.get('/:id', getStudentbyId);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;