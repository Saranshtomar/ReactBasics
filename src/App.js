import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import { useState } from "react";

function App() {
var value = 8;

  return (
    <div>
        {value==1?<h1>saransh</h1>:value==2?<h2>utkarsh</h2>:<h1>omkar</h1>}
    
    </div>
  );
}

export default App;
