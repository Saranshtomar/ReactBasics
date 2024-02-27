import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import { useState } from "react";

function App() {

// State to track the selected radio button value
const [selectedValue, setSelectedValue] = useState('');

// Event handler to update the selected value when a radio button is clicked
const handleRadioChange = (event) => {
  setSelectedValue(event.target.value);
};


  
  return (
    <>
 
      <input
        type="radio"
        id="option1"
        name="options"
        value="option1"
       
        onChange={handleRadioChange}
      />
      <label htmlFor="option1">Option 1</label>

      <input
        type="radio"
        id="option2"
        name="options"
        value="option2"
       
        onChange={handleRadioChange}
      />
      <label htmlFor="option2">Option 2</label>

      <input
        type="radio"
        id="option3"
        name="options"
        value="option3"
        
        onChange={handleRadioChange}
      />
      <label htmlFor="option3">Option 3</label>

      <p>Selected value: {selectedValue}</p>
      </>

  );
}

export default App;
