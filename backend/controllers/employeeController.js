const Employee = require('../models/employee');
const Response = require('../utils/responseHelper');
const bcrypt = require('bcrypt');


const createEmployee = async (req,res) => {
    const {
        nip,
        first_name,
        last_name, 
        email, 
        password, 
        status

    } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const employee = await Employee.create({
            nip:nip,
            first_name:first_name,
            last_name:last_name, 
            email:email, 
            password:hashedPassword, 
            status:status
        });
        res.status(201).json(Response('success', 'Employee Created Successfully', employee));
    } catch (error) {
        res.status(400).json(Response('failed', null, error.message));
    }
};

const getEmployee = async (req,res) => {
    try {
        const employee = await Employee.findAll();
        res.status(201).json(Response('success', 'List All Employee', employee))
    } catch (error) {
        res.status(500).json(Response('failed', null, error.message));
    }
}

const getEmployeebyId = async(req,res) => {
    try {
        const employee = await Employee.findByPk(req.params.id)
        if(!employee){
            res.status(404).json(Response('failed', 'No Employee with ID', null))
        }
        res.status(201).json(Response('Success', 'List Employee with ID', employee));
    } catch (error) {
        res.status(500).json(Response('failed', null, error.message))
    }
}

const updateEmployee = async (req,res) => {
    try {
        const [updated] = await Employee.update(req.body, {
            where: {
                nip: req.params.id
            }
        });
        if(!updated){
            res.status(404).json(Response('failed', 'No Employee with ID', null));
        }
        const updatedEmployee = await Employee.findByPk(req.params.id);
        res.status(200).json(Response('Success','Employee Updated', updatedEmployee))
    } catch (error) {
        res.status(400).json(Response('Failed','No Employee Updated', error.message));
    }
}

const deleteEmployee = async(req,res) => {
    try {
        const deleted = await Employee.destroy({
            where: { nip: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json(Response('error','Employee Not Found', null));
        }
        res.status(200).json(Response('success', 'Employee Deleted Sucessfully'));
    } catch (error) {
        res.status(500).json(Response('error','No Employee Deleted', error.message));
    }
}

module.exports = {
    createEmployee,
    getEmployee, 
    getEmployeebyId,
    updateEmployee,
    deleteEmployee
}