import React from 'react';

import './Math.css';
import {images} from "../../constants";
import { SubHeading } from '../../components';

const Math = () => (
  <div className = "app__math app__wrapper app__wrapper section__padding" id = "math">
    <div className="app__wrapper_img">
      <img src = {images.mathcat} alt ='header img'/>
    </div>
    
    <div className = "app__wrapper-info">
      <SubHeading title = "Section 3"/>
      <h1 className = "app__datasci-h1 ">Mathematics</h1> 
      <p className = "p__opensans" style = {{margin : "2rem 0"}}>
        New content: Comming up soon
      </p>
      <button className ="custom__button" type = "button">All Contents</button>
    </div>
  </div>
);

export default Math;
