import React from "react";
import { Link } from "react-router-dom";
import SideDrawerButton from "../SideDrawer/SideDrawerButton";

import "./toolbar.scss";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__button">
          <SideDrawerButton click={props.drawerToggleClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/">
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588899368/Logo/blogo-gray_doyoy3.png" />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar__nav-items">
          <Link>Map</Link>
          <Link>Students</Link>
          <Link>About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
