import { useEffect, useState } from "react";
import axios from "axios";

function StudentData(props) {
  const [student, SetStudent] = useState([]);

  const fetchStudentData = async () => {
    const response =  await axios.get("http://localhost:8081/students");
    console.log(response);
    SetStudent(response.data);
  };
  useEffect(() => {
    fetchStudentData();
  }, [props.id]);

 

  return (
    <div>
      <h2>Students List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>756</th>
          </tr>
        </thead>
        <tbody>
          {student.map(students => (
          <tr key={students.studentId}>
            <td>{students.studentId}</td>
            <td>{students.studentName}</td>
            <td>{students.dateOfBirth}</td>
            <td>{students.studentDepartment}</td>
            <td>{students.studentCity}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentData;
