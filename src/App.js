// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList';

function App() {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Student Management System</h1>
            <StudentForm />
            <hr />
            <StudentList />
        </div>
    );
}

export default App;
