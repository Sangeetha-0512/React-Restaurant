import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding " id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1
        className="headtext__cormorant"
        style={{ marginBottom: "3rem", color: "#DCCA87" }}
      >
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{color:'#fff'}}>
          Lane ENds Bungalow,Whatcroft Hall lane,Rudheath,CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "1rem 0" ,fontSize:'40px'}}
        >
          Opening Hours
        </p>
        <p className="p__opensans" style={{color:'#DCCA87',color:'#fff'}}>Mon - Fri: 10:00 am - 02:00 pm</p>
        <p className="p__opensans" style={{color:'#DCCA87',color:'#fff'}}>Sat - Sun: 10:00am - 03:00pm</p>
      </div>
      <button className="custom__button" style={{marginTop:'2rem',color: "#0C0C0C",
          borderColor: "#DCCA87",
          backgroundColor: "#DCCA87",
          padding: "14px",
          borderRadius:'3px',
          width:'180px',color: "#0C0C0C",
          borderColor: "#DCCA87",
          backgroundColor: "#DCCA87",
          padding: "14px",
          borderRadius:'3px',
          width:'150px',
          textAlign:'center'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
