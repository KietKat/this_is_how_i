import React from 'react';

import {FiGithub, FiLinkedin,FiMail} from "react-icons/fi"
import './Footer.css';
import {images} from "../../constants"
import { SubHeading } from '../../components';

const Footer = () => (
  <div className = "app__footer" id = "contact">
    <div className = "app__footer-logo">
      <img src = {images.tihiu} alt = "app__logo"/>
    </div>

    <SubHeading title = "Thank you for dropping by! See you soon!!!"/>

    <div className = "app__footer-icons">
        <a href = "https://github.com/KietKat"><FiGithub/></a>
        <a href = "https://www.linkedin.com/in/kiet-nguyen-2oo1/"><FiLinkedin/></a>
        <p className = "p__opensans" fontsize = {27} color='var(--color-white)'><FiMail/>tnguy260@asu.edu</p>
    </div>
  </div>
);

export default Footer;
