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
          <h2>Student Bios</h2>
        </div>
        <div>
          <p>
            Simple app built with create-react-app, so students can practice
            contributing to open source. Students can then, add their BIOS, as
            about information, picture, and direct links.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
