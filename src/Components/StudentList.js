// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10;

    const fetchStudents = async () => {
        try {
            const response = await axios.get(`/students?page=${page}&limit=${limit}`);
            setStudents(response.data.students);
            setTotalPages(Math.ceil(response.data.total / limit));
        } catch (error) {
            console.error('Error fetching students', error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div>
            <ul className="list-group">
                {students.map(student => (
                    <li key={student.id} className="list-group-item">
                        {student.first_name} {student.last_name}
                    </li>
                ))}
            </ul>
            <div className="mt-3">
                <button onClick={handlePreviousPage} className="btn btn-secondary mr-2" disabled={page === 1}>Previous</button>
                <button onClick={handleNextPage} className="btn btn-secondary" disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default StudentList;
