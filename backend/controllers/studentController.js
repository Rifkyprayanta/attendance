const Student = require('../models/student');
const Response = require('../utils/responseHelper');

const getStudent = async (req,res) => {
    try {
        const student = await Student.findAll();
        res.status(201).json(Response('success', 'List All Student', student))
    } catch (error) {
        res.status(500).json(Response('failed', null, error.message));
    }
}

const createStudent = async (req,res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(Response('success', 'Student Created Successfully', student));
    } catch (error) {
        res.status(400).json(Response('failed', null, error.message));
    }
};

const getStudentbyId = async(req,res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        if(!student){
            res.status(404).json(Response('failed', 'No Student with ID', null))
        }
        res.status(201).json(Response('Success', 'List Student with ID', student));
    } catch (error) {
        res.status(500).json(Response('failed', null, error.message))
    }
}

const updateStudent = async (req,res) => {
    try {
        const [updated] = await Student.update(req.body, {
            where: {
                nis: req.params.id
            }
        });
        if(!updated){
            res.status(404).json(Response('failed', 'No Student with ID', null));
        }
        const updatedStudent = await Student.findByPk(req.params.id);
        res.status(200).json(Response('Success','Student Updated', updatedStudent))
    } catch (error) {
        res.status(400).json(Response('Failed','No Student Updated', error.message));
    }
}

const deleteStudent = async(req,res) => {
    try {
        const deleted = await Student.destroy({
            where: { nis: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json(Response('error','Student Not Found', null));
        }
        res.status(200).json(Response('success', 'Student Deleted Sucessfully'));
    } catch (error) {
        res.status(500).json(Response('error','No Student Deleted', error.message));
    }
}


module.exports = {
    getStudent, 
    createStudent,
    getStudentbyId,
    updateStudent,
    deleteStudent
}