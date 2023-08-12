import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id= "about">

    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className= "headtext__cormorant">About Kyle</h1>
        <p className='p__opensans'> 
        My name is Kiet Nguyen, or Kyle. By the time this page is made, I am 3rd year Data Science major at Arizona State
        University. I am working as a data analyst (short call for my role) for a project named "Starbucks Global Academy" at
        EdPlus, ASU. Besides that, I am also an officer at ASU's Software Development Association, which was great for being
        surrounded by so bright people (absolutely no peer pressure :)).
        </p>
      </div>

      <div className = "app__aboutus-content_knife flex__center">
        <img src = {images.trident} alt = "about_knife"/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className= "headtext__cormorant">About Kunj</h1>
        <p className='p__opensans'>

        </p>
      </div>

    </div>
  </div>
);

export default AboutUs;
