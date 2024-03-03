import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Table from 'react-bootstrap/Table';

function StudentData() {
  const [students, SetStudents] = useState([]);

  const fetchStudentData = async () => {
    const response = await axios.get("http://localhost:8080/students");
    SetStudents(response.data);
  };
  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <div>
      <br /><br />
      <h2>Student List</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>City</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.city}</td>
              <td>
                <Table>
                  <tbody>
                    {student.course.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default StudentData;
