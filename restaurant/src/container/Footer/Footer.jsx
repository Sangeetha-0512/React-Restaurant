import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagra, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div
      className="app__footer-links"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9W 53rd St New York,NY 10019,USA</p>
        <p className="p__opensans">+1 212-312-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others".
        </p>
        <img
          src={images.spoon}
          alt=""
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>

      <div className="app__footere-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00 am - 12:00 pm</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00 am - 11:00pm</p>
      </div>
    </div>
    <div
      className="footer__copywrite"
      style={{ position: "relative", zIndex: 10 }}
    >
      <p className="p__opensans" style={{ color: "#FFF" }}>
        2024 Gericht. All Rights reserved
      </p>
    </div>
  </div>
);

export default Footer;
