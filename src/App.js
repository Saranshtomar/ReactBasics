import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [gender, setGender] = useState("");

  function Submit(e) {
   
  }
  return (
    <div>

      <form onSubmit={Submit}>
        <label>Name</label>
        <br></br>
        <input type="text"  onChange={(e)=>setName(e.target.value)}  />
        <br />
        <select onChange={(e)=>setGender(e.target.value)}>
          <option>select options</option>
          <option>Male</option>
          <option>female</option>
        </select>
        <br></br>
        <br></br>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}></input>
        <span>terms and conditions</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
