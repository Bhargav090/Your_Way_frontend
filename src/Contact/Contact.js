import React from 'react';
import Main from '../Home/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Home/home.css';
import './contactUs.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="nav-bar">
          <Main />
        </div>
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <div className="developer-info">
            <h2>Developed By:</h2>
            <p>Bhargav Pathivada and Akash Reddy S</p>
          </div>
          <div className="contact-icons">
            <div className="contact-item">
              <h3>Bhargav Pathivada</h3>
              <a href="mailto:bhargav.pathivada090@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </a>
              <a href="https://www.linkedin.com/in/bhargav-pathivada-271182237/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              </a>
              <a href="https://www.instagram.com/_bhargav_09?igsh=amh6amdhdmpsdzNn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
              </a>
            </div>
            <div className="contact-item">
              <h3>Akash Reddy S</h3>
              <a href="mailto:akashreddys221@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </a>
              <a href="https://www.linkedin.com/in/akash-reddy-satti-63322924a/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              </a>
              <a href="https://www.instagram.com/akashreddy.s_?igsh=MnM4d291bm11Y3Z5" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="div3">
        <center>
          <h2 className="h2upd">News and Updates</h2>
        </center>
        <div className="updcard">
          <h3 className="h3head">
            Updated software improves slicing for large-format 3D printing
          </h3>
          <br />
          <h5>
            from:{" "}
            <a
              href="https://techxplore.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://techxplore.com/
            </a>
          </h5>
          <br />
          <p>
            Researchers at the Department of Energy's Oak Ridge National
            Laboratory have developed the first additive manufacturing slicing
            computer application to simultaneously speed and simplify digital
            conversion of accurate...
            <a
              href="https://techxplore.com/news/2024-07-software-slicing-large-format-3d.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="read-more">Read More</span>
            </a>
          </p>
          <br />
        </div>
      </div>
      </div>
    );
  }
}
