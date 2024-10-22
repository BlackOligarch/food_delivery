import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
    <br /><br />
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="assets-logo" src={assets.logo} alt="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
            <br/><br/>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
            <br/><br/>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+233(0)26 325 5930</li>
                <li>contact@tastifries.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © TastiFries.com - All Rights Reserved</p>
    </div>
    </>

  );
};

export default Footer;
