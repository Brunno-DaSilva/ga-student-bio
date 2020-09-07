import React, { useState } from "react";
import Modal from "../Modal/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./cards-style.scss";

const Cards = ({ name, title, imgUrl, ...otherSectionProps }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const modalIsOpenHandler = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  return (
    <>
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
            <br />
          </div>
          <div className="cards__top--right">
            <div>
              <button className="icon-plus-btn" onClick={modalIsOpenHandler}>
                <FontAwesomeIcon className="icon-plus" icon={faPlus} />
              </button>
            </div>
          </div>
          <div className="image">
            <img src={imgUrl} alt={title} />
          </div>
        </div>
        <div className="cards__bottom">
          <div className="cards__bottom--top">
            <h2>About</h2>
            <br />
            <div>
              <p>
                Darth Maul was a Dathomirian Zabrak Sith Lord. In The Phantom
                Menace, Sidious gave Maul his first mission: put the criminal
                organization Black Sun in disarray
              </p>
            </div>
          </div>
          <div className="cards__bottom--bottom">
            <div className="icons-container">
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
      </div>

      {modalIsOpen ? (
        <Modal
          name={name}
          title={title}
          imgUrl={imgUrl}
          {...otherSectionProps}
          modalIsOpenHandler={modalIsOpenHandler}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Cards;
