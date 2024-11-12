import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img.reverse" >
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info"style={{color:'#DCCA87'}}>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What wew believe in</h1>
      <div className="app__chef-content" style={{color:'#FFF'}}>
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam natus repellat laudantium pariatur quas, aut error quis ipsa facere.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, provident eos! Reprehenderit optio quaerat ipsa nam iste molestiae maiores vitae!</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans' style={{color:'#FFF'}}>Chef & Foundere</p>
        <img src={images.sign} alt="" />
      </div>
    
    </div>
  </div>
);

export default Chef;
