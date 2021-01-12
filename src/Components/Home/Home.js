import React from "react";

import "./home.scss";

const Home = () => {
  return (
    <div className="home animated delay-1s fadeInLeft">
      <div className="home__title">
        <div className="title__left">
          <h3>General Assembly</h3>
          <h3>Students BIO</h3>
          <p>
            So students can practice contributing to open source- add your BIOS:
            About information, picture, and social media links.
          </p>
        </div>
        <div className="title__right">
          <img src="" alt="" />
          <h3>Students BIO</h3>
        </div>
      </div>
      <div className="home__body">
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

export default Home;
