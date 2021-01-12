import React from "react";

import "./about.scss";

const About = () => {
  return (
    <div className="about animated delay-1s fadeInLeft">
      <div className="about__title">
        <h1>About</h1>
      </div>
      <div className="about__body">
        <div>
          <h2>Studenst Bios</h2>
          <p>
            imple app built with create-react-app, so students can practice
            contributing to open source.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
