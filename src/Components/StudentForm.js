// src/components/StudentForm.js
import React, { useState } from 'react';
import axios from '../axios';
import Swal from 'sweetalert2';

const StudentForm = ({ fetchStudents }) => {
    const [student, setStudent] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        email: '',
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/students', student);
            Swal.fire('Success', 'Student created successfully', 'success');
            fetchStudents();
        } catch (error) {
            Swal.fire('Error', 'There was an error creating the student', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="first_name" className="form-control" onChange={handleChange} value={student.first_name} required />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="last_name" className="form-control" onChange={handleChange} value={student.last_name} required />
            </div>
            <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" name="date_of_birth" className="form-control" onChange={handleChange} value={student.date_of_birth} required />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control" onChange={handleChange} value={student.email} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default StudentForm;
