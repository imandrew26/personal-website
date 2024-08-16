import { Link } from "react-scroll";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="navbar--logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/wangdrew/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/imandrew26"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/andrewwwwang/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
