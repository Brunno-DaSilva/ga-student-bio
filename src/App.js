import React, { Component } from "react";
import { Routes, Route, Redirect } from "react-router-dom";

import MapHolder from "./Components/Map/MapHolder";
import Students from "./Components/Students/Students";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error.jsx";

import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Footer from "./Components/Footer/Footer";

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

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
      <>
        <div className="app-container">
          <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/map"
              element={<MapHolder studentData={studentData} />}
            />
            <Route
              path="/students"
              element={<Students studentData={studentData} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
