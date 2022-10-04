import React from "react";
import "./footer.css";
import { footerLogo, locationIcon, phoneIcon, emailIcon } from "./import";
import "./footerMobile.css";
import "./footerLi.css";

const footer = () => {
  return (
    <footer>
      <div
        class="container"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div class="footer-logo my-2">
          <img src={footerLogo} alt="fylo logo" />
        </div>
        <div class="footer-content">
          <div class="address">
            <img src={locationIcon} alt="location" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div class="contact-info">
            <div class="flex">
              <img src={phoneIcon} alt="phone" />
              <p>+1-543-123-4567</p>
            </div>
            <div class="flex">
              <img src={emailIcon} alt="email" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div class="footer-nav-line-1">
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">jobs</a>
              </li>
              <li>
                <a href="#">press</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
          </div>
          <div class="footer-nav-line-2">
            <ul>
              <li>
                <a href="#">contact us</a>
              </li>
              <li>
                <a href="#">terms</a>
              </li>
              <li>
                <a href="#">privacy</a>
              </li>
            </ul>
          </div>
          <div class="social-links">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
