import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
  <div className='app__aboutus-overlay flex__center'style={{marginTop:'-10px'}}>
    <img src={images.G} alt="g letter"/>
    </div>
    <div className='app__aboutus-content flex__center'style={{color:'#DCCA87'}}>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>AboutUs</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans' style={{margin:'2rem 0',fontSize:'25px',color:'#fff',fontFamily:'cursive'}}>Lorem ipsum, dolor libero vero beatae nulla ad,consequuntur deserunt dolorum dolore, magnam temporibus aliquam blanditiis sint?</p>
     <buttton type="button" className='custom__button'style={{color: "#0C0C0C",
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
          textAlign:'center'}}>Know more</buttton>
      </div>

     <div className='app__aboutus-content_knife  flex__center'>
      <img src={images.knife}/></div> 
     
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans' style={{margin:'2rem 0',fontSize:'25px',color:'#fff',fontFamily:'cursive'}}>Lorem ipsum, dolor libero vero beatae nulla ad,consequuntur deserunt dolorum dolore, magnam temporibus aliquam blanditiis sint?</p>
     <buttton type="button" className='custom__button'style={{color: "#0C0C0C",
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
          textAlign:'center'}}>Know more</buttton>
      </div>
    </div>
    </div>
);

export default AboutUs;
