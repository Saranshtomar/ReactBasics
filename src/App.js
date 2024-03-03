import { useEffect, useState } from "react";
import StudentData from "./StudentData";
import { Button } from 'react-bootstrap';

function App() {
  const [id, setId] = useState(null);
  const [loadStudentData, setLoadStudentData] = useState(false);

  useEffect(()=>{
    document.title = "Student";
  })

  return (
    <div style={{textAlign: "center"}}>
      <br /><br />
      <h3>Search Student</h3>
      <br />
      <Button onClick={() => setLoadStudentData(true)} className="content-center bg-sky-500 hover:bg-sky-700">Show</Button>
      {loadStudentData && <StudentData />}
    </div>
  );
}

export default App;
