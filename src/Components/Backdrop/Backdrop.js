import React from "react";

import "./backdrop.scss";

const Backdrop = (props) => {
  return (
    <div
      aria-label="Close Main Menu Button"
      className="backdrop"
      onClick={props.backdropClick}
    />
  );
};

export default Backdrop;
