import React from "react";
import Main from "../Home/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../Home/home.css";
import "./contactUs.css";

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
              <a
                href="mailto:bhargav.pathivada090@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhargav-pathivada-271182237/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              </a>
              <a
                href="https://www.instagram.com/_bhargav_09?igsh=amh6amdhdmpsdzNn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
              </a>
            </div>
            <div className="contact-item">
              <h3>Akash Reddy S</h3>
              <a
                href="mailto:akashreddys221@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-reddy-satti-63322924a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              </a>
              <a
                href="https://www.instagram.com/akashreddy.s_?igsh=MnM4d291bm11Y3Z5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
