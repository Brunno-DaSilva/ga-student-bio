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
        <Link>Map</Link>
        <Link>Students</Link>
        <Link>About</Link>
      </div>
    </nav>
  );
};

export default SideDrawer;
