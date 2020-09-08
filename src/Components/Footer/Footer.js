import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as BottomWave } from "../../images/wave-gray.svg";

import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <BottomWave className="bottom-left" />
      <div className="footer">
        <div className="footer-info">
          <div className="bottom-section">
            <img
              className="b-logo"
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588899368/Logo/blogo-gray_doyoy3.png"
            />
            <p className="bruno">
              <span>{getYear()}</span> Bruno DaSilva
              <span> Front-End Developer</span>
            </p>

            <div className="more-projects">
              <span>Software Engineering Instructor</span>
              <p>
                More <span>Projects</span>
              </p>

              <div>
                <a href="https://github.com/Brunno-DaSilva" target="_blank">
                  <i>
                    <FontAwesomeIcon icon={faGithub} />
                  </i>
                </a>

                <a
                  href="https://www.linkedin.com/in/bruno-dasilva/"
                  target="_blank"
                >
                  <i>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </i>
                </a>

                <a href="http://bruno-dasilva.com/" target="_blank">
                  <i>
                    <FontAwesomeIcon icon={faGlobeAmericas} />
                  </i>
                </a>
              </div>
            </div>

            <div className="copyright">
              <p>
                Copyright <span>©{getYear()}</span> All rights reserved | made
                with <FontAwesomeIcon className="tomato" icon={faHeart} /> by
                Bruno DaSilva Software Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
