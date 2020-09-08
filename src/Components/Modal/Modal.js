import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGlobeAmericas,
  faIdBadge,
  faTimes,
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
  modalIsOpenHandler,
}) => {
  return (
    <>
      <div className="modal-container animated fadeInUp">
        <div className="modal__close animated delay-1s fadeInUp">
          <button onClick={modalIsOpenHandler}>
            <div className="icons-bg">
              <FontAwesomeIcon className="icons-social" icon={faTimes} />
            </div>
          </button>
        </div>
        <div className="modal animated delay-1s fadeInUp">
          <div className="modal__left-col animated delay-1s fadeInUp">
            <img src={imgUrl} />
          </div>
          <div className="modal__right-col">
            <div className="right-col__name animated delay-1shalf fadeInUp">
              <h2>{name}</h2>
            </div>
            <div className="right-col__lo-ti ">
              <div className="right-col__title animated delay-2s fadeInUp">
                <div className="icons-bg">
                  <FontAwesomeIcon className="icons-social" icon={faIdBadge} />
                </div>
                <p>
                  <span>{title}</span>
                </p>
              </div>
              <div className="right-col__location animated delay-2s fadeInUp">
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

            <div className="right-col__about animated delay-2s fadeInUp">
              <h3>About</h3>
              <p>{aboutDescription}</p>
            </div>
            <div className="right-col__icons">
              <div className="icons-bg animated delay-2shalf fadeInUp">
                <FontAwesomeIcon className="icons-social" icon={faGithubAlt} />
              </div>
              <div className="icons-bg animated delay-3s fadeInUp">
                <FontAwesomeIcon className="icons-social" icon={faTwitter} />
              </div>

              <div className="icons-bg animated delay-3shalf fadeInUp">
                <FontAwesomeIcon className="icons-social" icon={faLinkedinIn} />
              </div>
              <div className="icons-bg animated delay-4s fadeInUp">
                <FontAwesomeIcon className="icons-social" icon={faGlobe} />
              </div>
              <div className="icons-bg animated delay-4shalf fadeInUp">
                <FontAwesomeIcon className="icons-social" icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Backdrop />
    </>
  );
};

export default Modal;
