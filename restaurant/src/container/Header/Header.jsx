import React from 'react';
import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home"> 
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0',color:'#DCCA87',fontSize:'25px',color:'#FFF',fontFamily:'cursive'}}>Sit tellus lobortis sed senectus vivamus molestie.Condimentum volutpt morbi facilisis quam scelerisque sapien.Et,penatibus aliquam amet tellus</p>
      <button type='button' className='custom__button' style={{color: '#0C0C0C',borderColor:'#DCCA87',backgroundColor:'#DCCA87'}}>Explore Menu</button>
    </div>
    <div className='app__wrapper__img'>
      <img src={images.welcome} style={{width:'550px',height:'550px',marginLeft:'5%'}}/>
    </div>
  </div>
);
 
export default Header;
