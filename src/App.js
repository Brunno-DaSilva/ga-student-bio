import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MapHolder from "./Components/Map/MapHolder";
import Students from "./Components/Students/Students";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

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

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/map"
              render={() => <MapHolder studentData={studentData} />}
            />
            <Route
              exact
              path="/students"
              render={() => <Students studentData={studentData} />}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
