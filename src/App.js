import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [ider,setIdEr] = useState(false)
  const [nameer,setNameEr] = useState(false)

  function submitHandler(e) {
    e.preventDefault();
  }

  function idHandler(e){
    const item= e.target.value
    if(item.length<3)
    {
      setIdEr(true)
    }
    else
    {
      setIdEr(false)
    }
  }
  function nameHandler(e){
    const item= e.target.value
    if(item.length<3)
    {
      setNameEr(true)
    }
    else
    {
      setNameEr(false)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <br></br>
      <form onSubmit={submitHandler}>
        <label For="id">Id</label>
        <input type="text" placeholder="Enter id" id="id" onChange={idHandler} />{ider && <span >enter valid id </span>}
        <br />
        <label For="name">Name</label>
        <input type="text" placeholder="Enter name" id="name" onChange={nameHandler} />{nameer && <span>enter right name </span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
