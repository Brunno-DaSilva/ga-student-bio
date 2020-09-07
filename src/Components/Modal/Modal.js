import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGlobeAmericas,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./modal.scss";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({
  title,
  name,
  imgUrl,
  country,
  state,
  city,
  aboutDescription,
}) => {
  return (
    <>
      <div className="modal">
        <div className="modal__left-col">
          <img src={imgUrl} />
        </div>
        <div className="modal__right-col">
          <div className="right-col__name">
            <h2>{name}</h2>
          </div>
          <div className="right-col__lo-ti">
            <div className="right-col__title">
              <div className="icons-bg">
                <FontAwesomeIcon className="icons-social" icon={faIdBadge} />
              </div>
              <p>
                <span>{title}</span>
              </p>
            </div>
            <div className="right-col__location">
              <div className="icons-bg">
                <FontAwesomeIcon
                  className="icons-social"
                  icon={faGlobeAmericas}
                />
              </div>
              <p>
                <span>
                  {city}, {state}, {country}
                </span>
              </p>
            </div>
          </div>

          <div className="right-col__about">
            <h3>About</h3>
            <p>{aboutDescription}</p>
          </div>
          <div className="right-col__icons">
            <div className="icons-bg">
              <FontAwesomeIcon className="icons-social" icon={faGithubAlt} />
            </div>
            <div className="icons-bg">
              <FontAwesomeIcon className="icons-social" icon={faTwitter} />
            </div>

            <div className="icons-bg">
              <FontAwesomeIcon className="icons-social" icon={faLinkedinIn} />
            </div>
            <div className="icons-bg">
              <FontAwesomeIcon className="icons-social" icon={faGlobe} />
            </div>
            <div className="icons-bg">
              <FontAwesomeIcon className="icons-social" icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
      <Backdrop />
    </>
  );
};

export default Modal;
