const Employee = require('../models/employee');
const Student = require('../models/student');
const Response = require('../utils/responseHelper');
const bcrypt = require('bcrypt');

const loginStudent = async(req,res) => {
    const {
        nis,
        password
    } = req.body;

    try {
        const student = await Student.findByPk({ nis });
        if(!student){
            res.status(404).json(Response('failed', 'Nis Tidak Terdaftar', student))
        }

        const passwordMatch = await bcrypt.compare(password, student.password);
        if(!passwordMatch){
            res.status(401).json(Response('failed', 'Password Salah', null))
        }

        res.status(200).json(Response('success', 'Berhasil Login', student))
    } catch (error) {
        res.status(500).json(Response('failed', 'Gagal Login', null))
    }
}

module.exports = {
    loginStudent
}