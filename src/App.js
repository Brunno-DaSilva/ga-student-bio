import React, { Component } from "react";

import Cards from "./Components/Cards/Cards";

import STUDENT_INFO from "./StudentData";

import "./App.css";

class App extends Component {
  state = {
    studentData: STUDENT_INFO,
  };

  render() {
    const { studentData } = this.state;

    return (
      <div className="App">
        <h1>Students Bios</h1>
        <div className="students-data">
          {studentData.map(({ id, ...otherSectionProps }) => {
            return <Cards key={id} {...otherSectionProps} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
