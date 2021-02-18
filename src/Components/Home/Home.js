import React from "react";

import Button from "../Button/Button";

import "./home.scss";

const Home = () => {
  return (
    <div className="home animated delay-1s fadeInLeft">
      <div className="home__title">
        <div className="title__left">
          <div>
            <h3>General Assembly</h3>
            <h3>Student BIO</h3>
            <p>
              So students can practice contributing to open source- add your
              BIOS: About information, picture, and social media links.
            </p>
            <div className="button-holder">
              <Button />
            </div>
          </div>
        </div>
        <div className="title__right">
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1610484693/Java_Monochromatic_thyqfs.png"
            alt="Java Script"
          />
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
};

export default Home;
