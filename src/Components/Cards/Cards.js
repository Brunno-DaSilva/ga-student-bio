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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalIsOpenHandler = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="cards-container animated fadeInUp">
        <div className="cards__top ">
          <div className="cards__top--left animated delay-1 fadeInUp">
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
          <div className="cards__top--right animated delay-1 fadeInUp">
            <div>
              <button className="icon-plus-btn" onClick={modalIsOpenHandler}>
                <FontAwesomeIcon className="icon-plus" icon={faPlus} />
              </button>
            </div>
          </div>
          <div className="image animated delay-4s fadeInUp">
            <img src={imgUrl} alt={title} />
          </div>
        </div>
        <div className="cards__bottom">
          <div className="cards__bottom--top">
            <h2 className="animated delay-1s fadeInUp">About</h2>
            <br />
            <div>
              <p className="animated delay-1shalf fadeInUp">
                Darth Maul was a Dathomirian Zabrak Sith Lord. In The Phantom
                Menace, Sidious gave Maul his first mission: put the criminal
                organization Black Sun in disarray
              </p>
            </div>
          </div>
          <div className="cards__bottom--bottom animated delay-1shalf fadeInUp">
            <div className="icons-container ">
              <div className="icons-bg animated delay-2s fadeInUp">
                <FontAwesomeIcon className="icons-social " icon={faGithubAlt} />
              </div>
              <div className="icons-bg animated delay-2shalf fadeInUp">
                <FontAwesomeIcon className="icons-social" icon={faTwitter} />
              </div>

              <div className="icons-bg animated delay-3s fadeInUp">
                <FontAwesomeIcon className="icons-social" icon={faLinkedinIn} />
              </div>
              <div className="icons-bg animated delay-3shalf fadeInUp">
                <FontAwesomeIcon className="icons-social" icon={faGlobe} />
              </div>
              <div className="icons-bg icons-bg animated delay-4s fadeInUp">
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
