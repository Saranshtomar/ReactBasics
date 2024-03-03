import Table from 'react-bootstrap/Table';

function studentTable(props) {
    const studentData = props.data.student;
    return (<>
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
                {studentData.map(student => (
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
        </Table >
    </>
    );
}

export default studentTable;