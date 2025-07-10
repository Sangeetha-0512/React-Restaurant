import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[toggle,settoggle]=useState(false);
  
  return(
  <nav className='app__navbar'>
      <div className='app__navbar-logo'>
      {/* <a href="home"><img src={images.gericht} alt="app logo"/></a> */}
      <Link to="/home" className="p__opensans" style={{ color: 'white', fontSize: '25px' }}><img src={images.gericht} alt="app logo"/></Link>
      </div>
      <ul className='app__navbar-links' style={{fontSize:'20px'}}>
        <li className="p__opensans" ><a href='#home' style={{fontSize:'25px'}}>Home</a></li>
        <li className='p__opensans'><a href='#about'style={{fontSize:'25px'}}>About</a></li>
        <li className='p__opensans'><a href='#menu'style={{fontSize:'25px'}}>Menu</a></li>
        <li className='p__opensans'><a href='#awards'style={{fontSize:'25px'}}>Awards</a></li>
        <li className='p__opensans'><a href='#contact'style={{fontSize:'25px'}}>Contact</a></li>
      </ul>
      <div className='app_navbar-login'>
         <Link to="/login" className="p__opensans" style={{ color: 'white', fontSize: '25px' }}>Login</Link>
        <p style={{color:'white'}}>|</p>
        <Link to="/register" className="p__opensans" style={{ color: 'white', fontSize: '25px' }}>Register</Link>
        <p style={{color:'white'}}>|</p>
      <Link to="/booktable" className="p__opensans" style={{ color: 'white', fontSize: '25px' }}>Book Table</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} className='hello'onClick={()=>{settoggle(true)}}/>
         {toggle && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={()=>{settoggle(false)}}/>
        <ul className='app__navbar-smallscreen-links'>
        <li className="p__opensans" ><a href='#home'onClick={()=>{settoggle(false)}}>Home</a></li>
        <li className='p__opensans'><a href='#about'onClick={()=>{settoggle(false)}}>About</a></li>
        <li className='p__opensans'><a href='#menu'onClick={()=>{settoggle(false)}}>Menu</a></li>
        <li className='p__opensans'><a href='#awards'onClick={()=>{settoggle(false)}}>Awards</a></li>
        <li className='p__opensans'><a href='#contact'onClick={()=>{settoggle(false)}}>Contact</a></li>
      </ul>
      </div>
         )}
      </div>
        
  </nav>
  );
};

export default Navbar;
