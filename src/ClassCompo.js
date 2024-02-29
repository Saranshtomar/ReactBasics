import React from "react";

class ClassCompo extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "anil",
    };
  }
  
  render() {
    console.warn("infinite");
    return (
      <div>
        <h1>Class Componet {this.setState({ name: "utkarsh" })}</h1>
       
      </div>
    );
  }
}
export default ClassCompo;
