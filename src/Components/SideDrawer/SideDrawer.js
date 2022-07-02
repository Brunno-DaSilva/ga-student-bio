import React from "react";
import { Link } from "react-router-dom";

import "./side-drawer.scss";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <div className="side-drawer__nav-items">
        <div className="toolbar__logo">
          <Link to="/">
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588899368/Logo/blogo-gray_doyoy3.png" />
          </Link>
        </div>
        <Link to="/">Home</Link>
        <Link to="map">Map</Link>
        <Link to="students">Students</Link>
        <Link to="about">About</Link>
      </div>
    </nav>
  );
};

export default SideDrawer;
