import React from "react";
import { Link } from "react-router-dom";
import SideDrawerButton from "../SideDrawer/SideDrawerButton";

import { ReactComponent as TopRight } from "../../images/topright.svg";

import "./toolbar.scss";

const Toolbar = (props) => {
  return (
    <>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__button">
            <SideDrawerButton click={props.drawerToggleClickHandler} />
          </div>
          <div className="toolbar__logo">
            <Link className="animated delay-1shalf fadeInUp" to="/">
              <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588899368/Logo/blogo-gray_doyoy3.png" />
            </Link>
          </div>
          <div className="spacer" />
          <div className="toolbar__nav-items">
            <div className="App__top-right">
              <TopRight className="animated delay-1 fadeInRight" />
            </div>
            <Link className="animated delay-1shalf fadeInUp">Map</Link>
            <Link className="animated delay-2s fadeInUp">Students</Link>
            <Link className="animated delay-2shalf fadeInUp">About</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Toolbar;
