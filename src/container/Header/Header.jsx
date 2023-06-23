import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';


const Header = () => (
    <div className="app__header app__wrapper app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="A Personal Webpage" />
      <h1 className="app__header-h1">This Is How I... Understand</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        "TIHI.U", in short, is where I note down academic material, intepreted into "Kyle" language and understanding, as an Data Science student at Arizona State University. 
      </p>
    </div>

    <div className="app__wrapper_img">
      <img src = {images.welcome} alt ='header img'/>
    </div>

  </div>
);

export default Header;
