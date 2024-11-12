import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newletter" />
      <h1
        className="headtext__comorant"
        style={{ color: "#DCCA87", zIndex: "2",fontSize:'39px' }}
      >
        Subscribe to Our Newsletter
      </h1>
      <p className="p__opensans" style={{ color: "#fff" ,fontSize:'23px'}}>
        And never miss latest Updates!
      </p>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your e-mail address" />
        <button type="" className="custom__button"style={{color: "#0C0C0C",
          borderColor: "#DCCA87",
          backgroundColor: "#DCCA87",
          borderRadius:'3px',
          width:'180px',color: "#0C0C0C",
          borderColor: "#DCCA87",
          backgroundColor: "#DCCA87",
          padding: "0.5rem 1rem",
         marginTop:"1.5px",
          textAlign:'center'}}>
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Newsletter;
