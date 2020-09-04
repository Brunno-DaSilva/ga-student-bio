import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./cards-style.scss";

const Cards = ({
  name,
  title,
  imgUrl,
  country,
  city,
  state,
  aboutDescription,
  linkedin,
  portfolio,
  github,
}) => {
  return (
    <div className="cards-container">
      <div className="cards__top">
        <div className="cards__top--left">
          <div className="name">
            <p>Name: </p>
            <p>{name}</p>
          </div>
          <div className="title">
            <p>Title: </p>
            <p>{title}</p>
          </div>
        </div>
        <div className="cards__top--right">
          <FontAwesomeIcon className="icon-plus" icon={faPlusCircle} />
        </div>
        <div className="image">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
      <div className="cards__bottom">
        <div className="cards__bottom--top">
          <h2>About ...</h2>
          <div>
            <p>
              Darth Maul was a Dathomirian Zabrak Sith Lord. In The Phantom
              Menace, Sidious gave Maul his first mission: put the criminal
              organization Black Sun in disarray
            </p>
          </div>
        </div>
        <div className="cards__bottom--bottom">
          <div className="icons">
            <FontAwesomeIcon className="info-icons active" icon={faGithub} />
            <FontAwesomeIcon className="info-icons social" icon={faTwitter} />
            <FontAwesomeIcon
              className="info-icons social"
              icon={faLinkedinIn}
            />
            <FontAwesomeIcon className="info-icons social" icon={faGlobe} />
            <FontAwesomeIcon className="info-icons social" icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
