import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Cards from "./Components/Cards/Cards";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";

import STUDENT_INFO from "./StudentData";

import "./App.css";

class App extends Component {
  state = {
    studentData: STUDENT_INFO,
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { studentData } = this.state;
    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
      sideDrawer = <SideDrawer />;
    }

    return (
      <>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}

        <div className="App">
          <h1>Students Bios</h1>
          <div className="students-data">
            {studentData.map(({ id, ...otherSectionProps }) => {
              return <Cards key={id} {...otherSectionProps} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
