import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id= "about">

    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className= "headtext__cormorant">About me</h1>
        <p className='p__opensans'> 
        My name is Kiet Nguyen, or Kyle. By the time this page is made, I am 3rd year Data Science major at Arizona University. 
        I grow an interest in logic field to explain everything in my own words. What brought me to this field was actually a childhood nightmare, 
        where I was trapped in a 2-escape room. Regardless of my choices, I fell downward to a similar room and could never escape (think of it as the binary tree with infinite height). 
        Weird, I know!
        </p>
      </div>

      <div className = "app__aboutus-content_knife flex__center">
        <img src = {images.trident} alt = "about_knife"/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className= "headtext__cormorant">TIHI.U</h1>
        <p className='p__opensans'>
          My goal is to become a software engineer full-stack after finishing Bachelor's, and I decided to make "TIHI.U" as an updating project for front-end skils. 
          I hate to admit that I don't have very fashionable eyes, so I stick with a monotone background and some complementatry colors.  
          This webpage will mainly focus on Computer Science, Data Science, Mathematics materials, from either ASU, UCB (dream grad school) or other sources!
        </p>
      </div>

    </div>
  </div>
);

export default AboutUs;
